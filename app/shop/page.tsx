import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopView } from "@/components/shop/shop-view"

export const metadata: Metadata = {
  title: "Shop – Kitchen and Dining | Himflora",
  description:
    "Explore our curated collection of handcrafted kitchen and dining essentials — from brass and copper glasses to terracotta bottles and mugs.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <ShopView category="Kitchen and Dining" />
      </div>
      <Footer />
    </main>
  )
}
