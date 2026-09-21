"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  Sparkles,
  HelpCircle,
  Truck,
  RotateCcw,
  ShieldCheck,
  MessageCircle,
  Mail,
  ChevronDown,
  ArrowLeft,
  X,
} from "lucide-react"

interface FAQItem {
  id: string
  category: "custom" | "care" | "shipping" | "returns" | "payments"
  question: string
  answer: string
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "real-flowers",
    category: "custom",
    question: "Are the flowers and botanicals in your artworks 100% real?",
    answer:
      "Yes, absolutely. Every petal, leaf, and botanical element used in Himflora creations is genuine and hand-harvested ethically from the Himalayan foothills and regional gardens. We never use artificial, synthetic, or plastic flowers.",
  },
  {
    id: "custom-orders",
    category: "custom",
    question: "Can I commission a custom botanical artwork or request specific flowers?",
    answer:
      "Yes! We love creating bespoke pieces. You can request specific flower species, color themes, or customized layouts. We also accept sentimental florals (such as bridal bouquets, anniversary blossoms, or memorial petals) to be dried, pressed, and preserved into archival frames. Please reach out via WhatsApp or email to begin a commission.",
  },
  {
    id: "crafting-time",
    category: "custom",
    question: "How long does it take to create a handcrafted piece?",
    answer:
      "Ready-to-ship catalog items are dispatched within 24–48 hours. Custom commissions typically require 7–14 business days, depending on botanical availability, pressing stages, and frame assembly.",
  },
  {
    id: "fade-longevity",
    category: "care",
    question: "Will the pressed flowers fade or decay over time?",
    answer:
      "Our multi-step botanical dehydration and UV-stabilization technique locks in natural pigments and organic integrity for years. While natural botanicals may mature gracefully over decades into vintage sepia tones, keeping your artwork away from continuous direct sunlight and high-humidity areas ensures vibrant preservation.",
  },
  {
    id: "cleaning-care",
    category: "care",
    question: "How should I clean and care for my framed artwork?",
    answer:
      "Gently wipe the outer glass surface with a soft microfiber cloth and a mild glass cleaner sprayed onto the cloth (never spray liquid directly onto the frame). Do not submerge or expose the back of the frame to moisture. For floating frames, avoid pressing heavily on the center glass pane.",
  },
  {
    id: "shipping-destinations",
    category: "shipping",
    question: "Where do you ship, and what are delivery timelines?",
    answer:
      "We ship across all pin codes in India. Domestic orders typically arrive within 3 to 5 business days after dispatch. We also fulfill international orders (delivered within 10–18 business days, depending on customs clearance).",
  },
  {
    id: "transit-protection",
    category: "shipping",
    question: "How do you protect delicate glass frames during shipping?",
    answer:
      "We treat every parcel with archival care. Frames are enveloped in corner protectors, shock-absorbing cellular bubble wrap, hard foam encasements, and heavy-duty corrugated cartons labeled 'Fragile Art Glass'. We have a 99.4% safe delivery track record.",
  },
  {
    id: "damaged-in-transit",
    category: "shipping",
    question: "What happens if my frame or glass arrives damaged?",
    answer:
      "In the rare event that courier mishandling causes damage, we take full responsibility. Simply share an unboxing photo or video with us within 7 days of delivery via WhatsApp (+91 8171776251) or email (contact.himflora@gmail.com). We will immediately issue a free expedited replacement or full refund.",
  },
  {
    id: "return-policy-faq",
    category: "returns",
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 7-day return/replacement window for any items that arrive damaged, defective, or incorrect. Because each standard piece is individually handcrafted from natural botanicals, slight organic variations in petal contours and color tones are inherent to nature. For full details, please review our Return Policy page.",
  },
  {
    id: "order-cancellation",
    category: "returns",
    question: "Can I cancel or modify an order after placing it?",
    answer:
      "If you need to change your delivery address or cancel a ready-ship order, please message us within 3 hours of placing it before the shipping label is generated. Custom commission orders cannot be cancelled once floral design work has commenced.",
  },
  {
    id: "payment-methods",
    category: "payments",
    question: "Which payment methods do you accept?",
    answer:
      "We accept all major UPI apps (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, MasterCard, RuPay, Amex), Net Banking across 50+ Indian banks, and secure digital wallets. All transactions are protected with end-to-end 256-bit SSL encryption.",
  },
  {
    id: "cod-available",
    category: "payments",
    question: "Is Cash on Delivery (COD) available?",
    answer:
      "To prevent transit damage from repeated courier handling and non-acceptance, delicate glass art items are shipped via insured prepaid shipping. For select pincodes, partial advance COD may be arranged upon inquiry with our support team.",
  },
]

const CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "custom", label: "Art & Customization", icon: Sparkles },
  { id: "care", label: "Care & Longevity", icon: ShieldCheck },
  { id: "shipping", label: "Shipping & Packaging", icon: Truck },
  { id: "returns", label: "Returns & Exchanges", icon: RotateCcw },
  { id: "payments", label: "Payments & Orders", icon: ShieldCheck },
]

export function FAQView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "real-flowers": true,
    "custom-orders": true,
  })

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {}
    filteredFaqs.forEach((item) => {
      allOpen[item.id] = true
    })
    setOpenItems(allOpen)
  }

  const collapseAll = () => {
    setOpenItems({})
  }

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory
      const query = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="relative px-6 py-16 md:py-24 bg-[#faf7f2] border-b border-zinc-200/60">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[440px] h-[440px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-[340px] h-[340px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-amber-800 mb-6 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-3">
            Customer Support & Knowledge Base
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-zinc-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to know about our handcrafted pressed botanicals, custom orders,
            archival preservation, and secure delivery.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., custom orders, glass care, shipping)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-zinc-200 text-sm text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Category Navigation ──────────────────────────────── */}
      <section className="px-6 py-8 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-zinc-100/80 hover:bg-zinc-200/80 text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion Section ────────────────────────────── */}
      <section className="px-6 py-16 md:py-20 bg-[#faf7f2]/50 min-h-[400px]">
        <div className="max-w-3xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-6 text-xs text-zinc-500">
            <p>
              Showing <span className="font-semibold text-zinc-800">{filteredFaqs.length}</span>{" "}
              {filteredFaqs.length === 1 ? "question" : "questions"}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover:text-amber-700 font-medium transition-colors"
              >
                Expand All
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-amber-700 font-medium transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openItems[faq.id]
                return (
                  <div
                    key={faq.id}
                    id={faq.id}
                    className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm transition-all duration-200 hover:border-amber-300"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base md:text-lg text-zinc-900 font-medium pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-amber-100 text-amber-800" : "text-zinc-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 md:px-6 pt-1 text-sm md:text-base text-zinc-600 leading-relaxed border-t border-zinc-100">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-sm">
              <HelpCircle className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-2">
                No matching questions found
              </h3>
              <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto">
                We couldn't find an answer matching &ldquo;{searchQuery}&rdquo;. Try different
                keywords or contact our team directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Direct Support Card */}
          <div className="mt-16 bg-white border border-amber-200/80 rounded-3xl p-8 md:p-10 shadow-sm text-center relative overflow-hidden">
            <div className="pointer-events-none absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-amber-100/50 blur-2xl" />
            <h3 className="font-serif text-2xl font-normal text-zinc-900 mb-3">
              Still have a question?
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6 leading-relaxed">
              Can't find what you're looking for? Our botanical artisans and customer support are
              always glad to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/918171776251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs md:text-sm font-medium transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 hover:border-zinc-400 text-zinc-800 text-xs md:text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
