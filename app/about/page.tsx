import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutView } from "@/components/about/about-view"

export const metadata: Metadata = {
  title: "About Us | Himflora",
  description:
    "Learn the story behind Himflora — a passionate team dedicated to bringing nature's art into your home through handcrafted, pressed-flower artworks.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <AboutView />
      </div>
      <Footer />
    </main>
  )
}
