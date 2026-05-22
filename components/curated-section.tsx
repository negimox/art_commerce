"use client"
import { artworks } from "@/lib/artworks"
import { ShoppingCart } from "lucide-react"

export function CuratedSection() {
  return (
    <section id="curated" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-foreground">Curated For You</h2>
          <p className="text-muted-foreground text-lg">Explore our complete collection of handcrafted artworks</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-[#d4a574] transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-48 md:h-56">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Details */}
              <div className="p-3 md:p-4">
                <h3 className="font-serif text-sm md:text-base font-normal text-foreground mb-1 line-clamp-2 group-hover:text-[#d4a574] transition-colors">
                  {artwork.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground mb-3">
                  {artwork.category}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    ₹{artwork.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-2 items-center text-xs text-muted-foreground mb-3">
                  {artwork.sizes.map((size, idx) => (
                    <span key={idx} className="px-2 py-1 bg-background border border-border rounded">
                      {size}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity text-xs md:text-sm font-medium">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
