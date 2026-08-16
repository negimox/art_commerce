import type { Metadata } from "next"
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
        <ShopView
          category="Handmade Nature Frames"
          initialProducts={initialProducts}
          shopCategories={shopCategories}
          priceRanges={priceRanges}
        />
      </div>
      <Footer />
    </main>
  )
}
