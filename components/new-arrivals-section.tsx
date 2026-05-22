"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { artworks } from "@/lib/artworks"

const featuredArtworks = artworks.filter((art) => art.featured).slice(0, 3)

export function NewArrivalsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredArtworks.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + featuredArtworks.length) % featuredArtworks.length)
    setIsAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % featuredArtworks.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="new-arrivals" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-foreground">New Arrivals</h2>
          <p className="text-muted-foreground text-lg">Discover our latest curated collection of pressed flower artworks</p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] bg-background border border-border">
            <div className="flex h-full">
              {featuredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-normal text-white mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-white/80 mb-4">{artwork.description}</p>
                    <p className="text-xl font-semibold text-white">₹{artwork.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {featuredArtworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
