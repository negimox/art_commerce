"use client"
import { useEffect, useState } from "react"
import { categories } from "@/lib/artworks"

export function CategoriesSection() {
  const [loadedCategories, setLoadedCategories] = useState<typeof categories>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setLoadedCategories(categories)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="categories" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-foreground">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Browse our carefully curated collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            <>
              <div className="h-48 md:h-56 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse" />
              <div className="h-48 md:h-56 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse" />
            </>
          ) : (
            loadedCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg h-48 md:h-56 bg-gradient-to-br from-[#d4a574]/10 to-[#d4a574]/20 border border-[#d4a574]/30 hover:border-[#d4a574]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#d4a574]/5 group-hover:to-[#d4a574]/10 transition-all" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-2 group-hover:text-[#d4a574] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">{category.count} Artworks</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
