"use client"
import type { Artwork } from "@/lib/supabase/queries"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface NewArrivalsSectionProps {
  artworks: Artwork[]
}

export function NewArrivalsSection({ artworks }: NewArrivalsSectionProps) {
  const featuredArtworks = artworks.filter((art) => art.featured).slice(0, 3)
  return (
    <section id="new-arrivals" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-foreground">New Arrivals</h2>
          <p className="text-muted-foreground text-lg">Discover our latest curated collection of pressed flower artworks</p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {featuredArtworks.map((artwork) => (
                <CarouselItem key={artwork.id}>
                  <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] bg-background border border-border group">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 lg:bg-black/10 lg:group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-serif font-normal text-white mb-2">
                        {artwork.title}
                      </h3>
                      <div className="hidden lg:block max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                        <p className="text-white/80 mb-4 mt-2">
                          {artwork.description}
                        </p>
                        <p className="text-xl font-semibold text-white">₹{artwork.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/40 text-white border-0" />
            <CarouselNext className="right-6 bg-white/20 hover:bg-white/40 text-white border-0" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
