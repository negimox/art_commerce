import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { CuratedSection } from "@/components/curated-section"
import { Footer } from "@/components/footer"
import { getArtworks } from "@/lib/supabase/queries"

export default async function Home() {
  const artworks = await getArtworks()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NewArrivalsSection artworks={artworks} />
      <CuratedSection artworks={artworks} />
      <Footer />
    </main>
  )
}
