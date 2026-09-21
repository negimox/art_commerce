import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsView } from "@/components/legal/terms-view"

export const metadata: Metadata = {
  title: "Terms & Conditions | Himflora",
  description:
    "Review the terms and conditions for browsing, ordering, and commissioning handcrafted botanical art from Himflora.",
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <TermsView />
      </div>
      <Footer />
    </main>
  )
}
