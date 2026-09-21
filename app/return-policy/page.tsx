import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReturnPolicyView } from "@/components/legal/return-policy-view"

export const metadata: Metadata = {
  title: "Return & Refund Policy | Himflora",
  description:
    "Review Himflora's 7-day transit damage replacement guarantee, return conditions, refund processing, and support guidelines for handcrafted botanical artworks.",
}

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <ReturnPolicyView />
      </div>
      <Footer />
    </main>
  )
}
