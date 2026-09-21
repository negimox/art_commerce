import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQView } from "@/components/faq/faq-view"

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Himflora",
  description:
    "Find answers to common questions regarding Himflora handcrafted botanical artworks, real pressed flowers, custom commissions, archival care, and secure shipping.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <FAQView />
      </div>
      <Footer />
    </main>
  )
}
