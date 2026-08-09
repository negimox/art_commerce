import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactView } from "@/components/contact/contact-view"

export const metadata: Metadata = {
  title: "Contact Us | Himflora",
  description:
    "Get in touch with the Himflora team. We'd love to hear from you — whether it's about a custom order, a question, or just to say hello.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <ContactView />
      </div>
      <Footer />
    </main>
  )
}
