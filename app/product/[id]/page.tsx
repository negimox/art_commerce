import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  getProductByIdOrSlug,
  getRelatedProducts,
  type Artwork,
  type ShopProduct,
} from "@/lib/supabase/queries"
import { ProductDetail } from "./product-detail"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

// Unified product type that works for both artworks and shop products
export type UnifiedProduct = {
  id: string
  title: string
  image: string
  price: number
  originalPrice?: number
  category: string
  discountPercent?: number
  description?: string
  artist?: string
  dimensions?: string
  shippingStatus?: string
  sizes?: string[]
  sizePricing?: { size: string; price: number }[]
  badge?: string
}

async function getProduct(id: string): Promise<UnifiedProduct | null> {
  const item = await getProductByIdOrSlug(id)
  if (!item) return null

  if ("artist" in item) {
    const artwork = item as Artwork
    return {
      id: artwork.id,
      title: artwork.title,
      image: artwork.image,
      price: artwork.price,
      originalPrice: artwork.originalPrice,
      category: artwork.category,
      discountPercent: artwork.originalPrice
        ? Math.round((1 - artwork.price / artwork.originalPrice) * 100)
        : undefined,
      description: artwork.description,
      artist: artwork.artist,
      dimensions: artwork.dimensions,
      shippingStatus: artwork.shippingStatus,
      sizes: artwork.sizes,
      sizePricing: artwork.sizePricing,
      badge: artwork.badge,
    }
  }

  const shopProduct = item as ShopProduct
  return {
    id: shopProduct.id,
    title: shopProduct.title,
    image: shopProduct.image,
    price: shopProduct.price,
    originalPrice: shopProduct.originalPrice,
    category: shopProduct.category,
    discountPercent: shopProduct.discountPercent,
    description:
      shopProduct.description ||
      `Handcrafted ${shopProduct.category.toLowerCase()} piece made with care and traditional techniques.`,
    sizes: ["Standard"],
    sizePricing: shopProduct.sizePricing,
    badge: shopProduct.badge,
  }
}

async function getRelated(product: UnifiedProduct): Promise<UnifiedProduct[]> {
  const items = await getRelatedProducts(product.category, product.id, 3)

  return items.map((item) => {
    if ("artist" in item) {
      const artwork = item as Artwork
      return {
        id: artwork.id,
        title: artwork.title,
        image: artwork.image,
        price: artwork.price,
        originalPrice: artwork.originalPrice,
        category: artwork.category,
        discountPercent: artwork.originalPrice
          ? Math.round((1 - artwork.price / artwork.originalPrice) * 100)
          : undefined,
        description: artwork.description,
        artist: artwork.artist,
        dimensions: artwork.dimensions,
        shippingStatus: artwork.shippingStatus,
        sizes: artwork.sizes,
        sizePricing: artwork.sizePricing,
        badge: artwork.badge,
      }
    }

    const shopProduct = item as ShopProduct
    return {
      id: shopProduct.id,
      title: shopProduct.title,
      image: shopProduct.image,
      price: shopProduct.price,
      originalPrice: shopProduct.originalPrice,
      category: shopProduct.category,
      discountPercent: shopProduct.discountPercent,
      description:
        shopProduct.description ||
        `Handcrafted ${shopProduct.category.toLowerCase()} piece.`,
      sizes: ["Standard"],
      sizePricing: shopProduct.sizePricing,
      badge: shopProduct.badge,
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  if (!product) return { title: "Not Found | HimFlora" }
  return {
    title: `${product.title} | HimFlora`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  const related = await getRelated(product!)

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Header />
      <div className="pt-28 pb-20">
        <ProductDetail product={product!} related={related} />
      </div>
      <Footer />
    </main>
  )
}
