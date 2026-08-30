/**
 * queries.ts – Supabase data-fetching helpers
 *
 * Drop-in replacements for the static arrays previously in:
 *   lib/artworks.ts  → getArtworks(), getArtworkBySlug(), getArtworkCategories()
 *   lib/shop-data.ts → getShopProducts(), getShopCategories(), getPriceRanges()
 *
 * All functions return plain objects that match the original TypeScript
 * interfaces so existing component code requires zero changes.
 */

import { createClient } from "@/lib/supabase/server";
import type { Tables } from "@/lib/supabase";

// ─── Re-exported interfaces (mirror artworks.ts / shop-data.ts) ──────────────

export interface Artwork {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  sizes: string[];
  sizePricing?: { size: string; price: number }[];
  description: string;
  featured?: boolean;
  artist?: string;
  dimensions?: string;
  shippingStatus?: "Made To Order" | "Ready to Ship";
  originalPrice?: number;
  badge?: string;
  slug: string;
  sequence?: number | null;
}

export interface ShopProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  sizePricing?: { size: string; price: number }[];
  discountPercent?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  isNew?: boolean;
  description?: string;
  slug: string;
}

export interface ShopCategory {
  name: string;
  count: number;
}

export interface PriceRange {
  label: string;
  min: number;
  max: number | null;
  count: number;
}

// ─── Internal mapper ─────────────────────────────────────────────────────────

type ProductRow = Tables<"products">;

function rowToArtwork(row: ProductRow): Artwork {
  return {
    id: row.id,
    title: row.title,
    image: row.image_url,
    price: Number(row.price),
    category: row.category,
    sizes: row.sizes ?? [],
    sizePricing: (row.size_pricing as any) ?? undefined,
    description: row.description ?? "",
    featured: row.is_new ?? false,
    artist: row.artist ?? undefined,
    dimensions: row.dimensions ?? undefined,
    shippingStatus: row.shipping_status ?? undefined,
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    badge: row.badge ?? undefined,
    slug: row.slug,
    sequence: row.sequence,
  };
}

function rowToShopProduct(row: ProductRow): ShopProduct {
  return {
    id: row.id,
    title: row.title,
    image: row.image_url,
    price: Number(row.price),
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    category: row.category,
    sizePricing: (row.size_pricing as any) ?? undefined,
    discountPercent: row.discount_percent ? Number(row.discount_percent) : undefined,
    rating: row.rating ? Number(row.rating) : undefined,
    reviewCount: row.review_count ?? 0,
    badge: row.badge ?? undefined,
    isNew: row.is_new ?? false,
    description: row.description ?? "",
    slug: row.slug,
  };
}

// ─── Artwork queries ─────────────────────────────────────────────────────────

/**
 * Fetch all active artworks ordered by creation date.
 * Replaces the static `artworks` array in lib/artworks.ts.
 */
export async function getArtworks(): Promise<Artwork[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("type", "artwork")
    .eq("is_active", true)
    .order("sequence", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[getArtworks]", error.message);
    return [];
  }
  return (data ?? []).map(rowToArtwork);
}

/**
 * Fetch a single artwork by its URL slug.
 */
export async function getArtworkBySlug(slug: string): Promise<Artwork | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("type", "artwork")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    if (error.code !== "PGRST116") {
      console.error("[getArtworkBySlug]", error.message);
    }
    return null;
  }
  return data ? rowToArtwork(data) : null;
}

/**
 * Fetch artwork categories with live counts from the DB.
 * Replaces the static `categories` array in lib/artworks.ts.
 */
export async function getArtworkCategories(): Promise<{ name: string; count: number }[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("category")
    .eq("type", "artwork")
    .eq("is_active", true);

  if (error) {
    console.error("[getArtworkCategories]", error.message);
    return [];
  }

  const counts = (data as { category: string }[] ?? []).reduce<Record<string, number>>((acc, row) => {
    acc[row.category] = (acc[row.category] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

// ─── Shop product queries ─────────────────────────────────────────────────────

/**
 * Fetch all active shop products with optional filters.
 * Replaces the static `shopProducts` array in lib/shop-data.ts.
 *
 * @param options.category  – filter by category name
 * @param options.minPrice  – minimum price (inclusive)
 * @param options.maxPrice  – maximum price (inclusive), null = no upper bound
 * @param options.sortBy    – 'price-asc' | 'price-desc' | 'newest' | 'default'
 */
export async function getShopProducts(options?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number | null;
  sortBy?: "price-asc" | "price-desc" | "newest" | "default";
}): Promise<ShopProduct[]> {
  const supabase = await createClient();

  let query = supabase
    .from("products")
    .select("*")
    .eq("type", "shop_product")
    .eq("is_active", true);

  if (options?.category) {
    query = query.eq("category", options.category);
  }
  if (options?.minPrice != null) {
    query = query.gte("price", options.minPrice);
  }
  if (options?.maxPrice != null) {
    query = query.lte("price", options.maxPrice);
  }

  // Sorting
  switch (options?.sortBy) {
    case "price-asc":
      query = query.order("price", { ascending: true });
      break;
    case "price-desc":
      query = query.order("price", { ascending: false });
      break;
    case "newest":
      query = query.order("created_at", { ascending: false });
      break;
    default:
      query = query.order("created_at", { ascending: true });
  }

  const { data, error } = await query;
  if (error) {
    console.error("[getShopProducts]", error.message);
    return [];
  }
  return (data ?? []).map(rowToShopProduct);
}

/**
 * Fetch a single shop product by its URL slug.
 */
export async function getShopProductBySlug(slug: string): Promise<ShopProduct | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("type", "shop_product")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    if (error.code !== "PGRST116") {
      console.error("[getShopProductBySlug]", error.message);
    }
    return null;
  }
  return data ? rowToShopProduct(data) : null;
}

/**
 * Fetch shop categories with live product counts from the DB.
 * Replaces the static `shopCategories` array in lib/shop-data.ts.
 */
export async function getShopCategories(): Promise<ShopCategory[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("category")
    .eq("type", "shop_product")
    .eq("is_active", true);

  if (error) {
    console.error("[getShopCategories]", error.message);
    return [];
  }

  const counts = (data as { category: string }[] ?? []).reduce<Record<string, number>>((acc, row) => {
    acc[row.category] = (acc[row.category] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

/**
 * Build price-range buckets dynamically from live data.
 * Replaces the static `priceRanges` array in lib/shop-data.ts.
 *
 * Uses the same breakpoints as the original static list so the UI filter
 * sidebar stays identical.
 */
export async function getPriceRanges(): Promise<PriceRange[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("price")
    .eq("type", "shop_product")
    .eq("is_active", true);

  if (error) {
    console.error("[getPriceRanges]", error.message);
    return [];
  }

  const prices = (data as { price: number }[] ?? []).map((r) => Number(r.price));

  const buckets: Array<{ label: string; min: number; max: number | null }> = [
    { label: "Rs.0.00 - Rs.999.99",       min: 0,     max: 999.99  },
    { label: "Rs.1,000 - Rs.1,999.99",    min: 1000,  max: 1999.99 },
    { label: "Rs.2,000 - Rs.2,999.99",    min: 2000,  max: 2999.99 },
    { label: "Rs.3,000 - Rs.3,999.99",    min: 3000,  max: 3999.99 },
    { label: "Rs.4,000 - Rs.4,999.99",    min: 4000,  max: 4999.99 },
    { label: "Rs.5,000 - Rs.5,999.99",    min: 5000,  max: 5999.99 },
    { label: "Rs.6,000 - Rs.6,999.99",    min: 6000,  max: 6999.99 },
    { label: "Rs.7,000 - Rs.7,999.99",    min: 7000,  max: 7999.99 },
    { label: "Rs.8,000 - Rs.8,999.99",    min: 8000,  max: 8999.99 },
    { label: "Rs.21,000 and above",        min: 21000, max: null     },
  ];

  return buckets
    .map((b) => ({
      ...b,
      count: prices.filter((p) =>
        p >= b.min && (b.max === null ? true : p <= b.max)
      ).length,
    }))
    .filter((b) => b.count > 0);
}

// ─── Sort options (static, no DB needed) ─────────────────────────────────────

export const sortOptions = [
  { label: "Default",              value: "default"      },
  { label: "Price: Low to High",   value: "price-asc"    },
  { label: "Price: High to Low",   value: "price-desc"   },
  { label: "Newest First",         value: "newest"       },
  { label: "Best Selling",         value: "best-selling" },
] as const;
