"use client"
import { artworks } from "@/lib/artworks"
import { ArtworkCard } from "@/components/ui/artwork-card"

export function CuratedSection() {
  return (
    <section id="curated" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-foreground">Curated For You</h2>
          <p className="text-muted-foreground text-lg">Explore our complete collection of handcrafted artworks</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  )
}
