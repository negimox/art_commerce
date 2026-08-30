import type { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopView } from "@/components/shop/shop-view"
import { getShopProducts, getShopCategories, getPriceRanges } from "@/lib/supabase/queries"

export const metadata: Metadata = {
  title: "Shop – Handmade Home Decor | Himflora",
  description:
    "Explore our curated collection of handcrafted home decor items.",
}

export default async function ShopPage() {
  const [initialProducts, shopCategories, priceRanges] = await Promise.all([
    getShopProducts(),
    getShopCategories(),
    getPriceRanges(),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Suspense fallback={
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-pulse">
            <div className="h-8 bg-zinc-200 rounded w-1/4 mb-6" />
            <div className="flex gap-8">
              <div className="w-64 h-96 bg-zinc-200 rounded hidden md:block" />
              <div className="flex-1 space-y-4">
                <div className="h-10 bg-zinc-200 rounded" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-64 bg-zinc-200 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        }>
          <ShopView
            category="Handmade Nature Frames"
            initialProducts={initialProducts}
            shopCategories={shopCategories}
            priceRanges={priceRanges}
          />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
