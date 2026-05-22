import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { CategoriesSection } from "@/components/categories-section"
import { CuratedSection } from "@/components/curated-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NewArrivalsSection />
      <CategoriesSection />
      <CuratedSection />
      <Footer />
    </main>
  )
}
