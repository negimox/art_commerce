"use client"

import { useEffect, useRef, useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react"

function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  )
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email us",
    value: "contact.himflora@gmail.com",
    href: "mailto:contact.himflora@gmail.com",
    description: "We reply within 24 hours on working days.",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    description: "Quickest way to reach us for custom orders.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@himflora.in",
    href: "https://instagram.com/himflora.in",
    description: "Tag us in your unboxing moments — we love it!",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Mussoorie, Uttarakhand",
    href: "https://maps.app.goo.gl/7WY1mtC4kJBqUngb7",
    description: "By-appointment visits for local customers.",
  },
]

const faqs = [
  {
    question: "How long do custom orders take?",
    answer:
      "Custom orders typically take 7–14 business days depending on complexity and material availability. We'll send you a timeline after discussing your vision.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship worldwide. International delivery usually takes 10–20 business days. Shipping charges are calculated at checkout.",
  },
  {
    question: "Can I request specific flowers?",
    answer:
      "Absolutely. We can incorporate specific botanicals if they're in season and available in our region. Reach out to discuss availability.",
  },
  {
    question: "What if my artwork arrives damaged?",
    answer:
      "We pack every order with archival care, but if damage occurs in transit, just send us a photo and we'll send a replacement or issue a full refund.",
  },
]

export function ContactView() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Simulate async submission
    setTimeout(() => {
      setStatus("sent")
      setForm({ name: "", email: "", subject: "", message: "" })
    }, 1500)
  }

  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative px-6 py-20 md:py-32 bg-[#faf7f2]">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-4">
              Get in touch
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6 text-zinc-900">
              We'd love to{" "}
              <span className="italic text-amber-700">hear from you</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Questions about an order? Want a custom artwork? Just want to say hello?
              Drop us a message — our small team personally reads every one.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Contact Methods ───────────────────────────────────── */}
      <section className="px-6 py-14 bg-white border-y border-zinc-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <AnimateIn key={i} delay={i * 70}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 p-6 rounded-2xl border border-zinc-100 hover:border-amber-200 hover:shadow-md bg-white transition-all duration-300 group h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-auto">
                    {method.description}
                  </p>
                </a>
              </AnimateIn>
            )
          })}
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-28 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Left Info */}
          <AnimateIn className="md:col-span-2 space-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-zinc-900 mb-4">
                Send us a message
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Fill in the form and we'll get back to you as soon as possible. For
                urgent matters, WhatsApp is your best bet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Response time</p>
                  <p className="text-xs text-zinc-500">Within 24 hours, Mon–Sat</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Languages</p>
                  <p className="text-xs text-zinc-500">English & Hindi</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right Form */}
          <AnimateIn delay={150} className="md:col-span-3">
            {status === "sent" ? (
              <div className="bg-white rounded-3xl border border-zinc-100 p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Message received!
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you within 24 hours. In
                  the meantime, feel free to browse our collection.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-amber-700 hover:text-amber-600 font-medium transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ananya Sharma"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="custom-order">Custom Order Enquiry</option>
                    <option value="existing-order">Existing Order Question</option>
                    <option value="wholesale">Wholesale / Bulk</option>
                    <option value="press">Press & Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-amber-700 disabled:bg-zinc-300 text-white rounded-xl px-6 py-3.5 text-sm font-medium transition-colors duration-200 group"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
              Quick answers
            </p>
            <h2 className="font-serif text-4xl font-normal text-zinc-900">
              Frequently asked
            </h2>
          </AnimateIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                  <button
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-zinc-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-zinc-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
