import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPolicyView } from "@/components/legal/privacy-policy-view"

export const metadata: Metadata = {
  title: "Privacy Policy | Himflora",
  description:
    "Learn how Himflora collects, uses, and protects your personal data, payment details, and shipping information in strict compliance with data privacy standards.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <PrivacyPolicyView />
      </div>
      <Footer />
    </main>
  )
}
