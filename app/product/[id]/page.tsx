import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { artworks } from "@/lib/artworks"
import { ProductDetail } from "./product-detail"
import type { Metadata } from "next"

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artwork = artworks.find((a) => a.id === params.id)
  if (!artwork) return { title: "Not Found | HimFlora" }
  return {
    title: `${artwork.title} | HimFlora`,
    description: artwork.description,
  }
}

export default function ProductPage({ params }: Props) {
  const artwork = artworks.find((a) => a.id === params.id)
  if (!artwork) notFound()

  const related = artworks
    .filter((a) => a.id !== artwork.id && a.category === artwork.category)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Header />
      <div className="pt-28 pb-20">
        <ProductDetail artwork={artwork} related={related} />
      </div>
      <Footer />
    </main>
  )
}
