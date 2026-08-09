import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { artworks } from "@/lib/artworks"
import { shopProducts } from "@/lib/shop-data"
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
  badge?: string
}

function getProduct(id: string): UnifiedProduct | null {
  // Check artworks first
  const artwork = artworks.find((a) => a.id === id)
  if (artwork) {
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
      badge: artwork.badge,
    }
  }

  // Check shop products
  const shopProduct = shopProducts.find((p) => p.id === id)
  if (shopProduct) {
    return {
      id: shopProduct.id,
      title: shopProduct.title,
      image: shopProduct.image,
      price: shopProduct.price,
      originalPrice: shopProduct.originalPrice,
      category: shopProduct.category,
      discountPercent: shopProduct.discountPercent,
      description: `Handcrafted ${shopProduct.category.toLowerCase()} piece made with care and traditional techniques.`,
      sizes: ["Standard"],
      badge: shopProduct.badge,
    }
  }

  return null
}

function getRelated(product: UnifiedProduct): UnifiedProduct[] {
  const artworkRelated = artworks
    .filter((a) => a.id !== product.id && a.category === product.category)
    .slice(0, 3)
    .map((a) => ({
      id: a.id,
      title: a.title,
      image: a.image,
      price: a.price,
      originalPrice: a.originalPrice,
      category: a.category,
      discountPercent: a.originalPrice
        ? Math.round((1 - a.price / a.originalPrice) * 100)
        : undefined,
      description: a.description,
      artist: a.artist,
      dimensions: a.dimensions,
      shippingStatus: a.shippingStatus,
      sizes: a.sizes,
    }))

  if (artworkRelated.length >= 3) return artworkRelated

  // Fill with shop products if not enough artworks
  const shopRelated = shopProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3 - artworkRelated.length)
    .map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      price: p.price,
      originalPrice: p.originalPrice,
      category: p.category,
      discountPercent: p.discountPercent,
      description: `Handcrafted ${p.category.toLowerCase()} piece.`,
      sizes: ["Standard"] as string[],
    }))

  return [...artworkRelated, ...shopRelated].slice(0, 3)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: "Not Found | HimFlora" }
  return {
    title: `${product.title} | HimFlora`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  const related = getRelated(product!)

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
