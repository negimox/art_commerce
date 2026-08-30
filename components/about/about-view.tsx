"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Leaf, Sparkles, Mountain, Users, Award } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Every piece we create uses real, hand-picked botanicals sourced ethically from the Himalayan foothills — no synthetic substitutes.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Each artwork is pressed, dried, and assembled by hand. You can feel the care and intention in every piece we send your way.",
  },
  {
    icon: Sparkles,
    title: "Truly Unique",
    description:
      "Because nature never repeats itself, no two Himflora pieces are identical. Your artwork is one-of-a-kind, just like you.",
  },
  {
    icon: Award,
    title: "Lasting Quality",
    description:
      "Our preservation technique locks in color and shape for years. Your Himflora piece will be a conversation starter for decades.",
  },
]

const stats = [
  { value: "2,000+", label: "Artworks Delivered" },
  { value: "50+", label: "Botanical Species Used" },
  { value: "4.9 ★", label: "Average Rating" },
  { value: "100%", label: "Handcrafted" },
]

const team = [
  {
    name: "Ananya Sharma",
    role: "Founder & Lead Artist",
    bio: "A botanist-turned-artist who fell in love with pressed flowers during her treks through Himachal Pradesh.",
    initials: "AS",
    color: "from-amber-200 to-orange-300",
  },
  {
    name: "Rohan Patel",
    role: "Co-Founder & Operations",
    bio: "Ensures every order is packed with the same love poured into creating the artwork — never a compromise.",
    initials: "RP",
    color: "from-emerald-200 to-teal-300",
  },
  {
    name: "Priya Mehta",
    role: "Head of Custom Orders",
    bio: "Works one-on-one with customers to translate their vision into a bespoke botanical masterpiece.",
    initials: "PM",
    color: "from-violet-200 to-purple-300",
  },
]

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
      { threshold: 0.15 }
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

export function AboutView() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative px-6 py-20 md:py-32 bg-[#faf7f2]">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-4">
              Our Story
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6 text-zinc-900">
              Nature's beauty,{" "}
              <span className="italic text-amber-700">preserved forever</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Himflora was born in the Himalayan foothills — where wildflowers bloom
              between ancient pines and the air smells of earth after rain. We press that
              magic into art you can hang on your wall.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="px-6 py-16 bg-white border-y border-zinc-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimateIn key={i} delay={i * 80} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-1">
                {s.value}
              </p>
              <p className="text-sm text-zinc-500">{s.label}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-emerald-100 overflow-hidden flex items-center justify-center">
                <Mountain className="w-24 h-24 text-amber-300" strokeWidth={1} />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-zinc-100">
                <p className="text-xs text-zinc-400 mb-0.5">Est.</p>
                <p className="text-2xl font-semibold text-zinc-900">2021</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-4">
              Where it all began
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-zinc-900 mb-6">
              A trek that changed everything
            </h2>
            <div className="space-y-4 text-zinc-500 leading-relaxed">
              <p>
                During a solo trek through the Spiti Valley in 2021, our founder Ananya
                came across a carpet of wildflowers she had never seen before. She pressed
                a few between the pages of her notebook — and couldn't stop thinking about
                them for weeks.
              </p>
              <p>
                Back in Delhi, she began experimenting with botanical preservation
                techniques, combining traditional methods with a modern aesthetic. Word
                spread through Instagram. Orders poured in. Himflora was born.
              </p>
              <p>
                Today, every piece we create carries that same sense of wonder — a quiet
                reminder that even the most fleeting things can be held onto, if you pay
                attention.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-28 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
              What we stand for
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900">
              Our values
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <AnimateIn key={i} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      {/* <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 mb-3">
              The people behind the petals
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900">
              Meet the team
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="group text-center">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-5 flex items-center justify-center text-2xl font-semibold text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Users className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-0.5">{member.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-700 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-zinc-900">
        <AnimateIn className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
            Ready to bring nature home?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Browse our collection or reach out for a custom commission — we'd love to
            create something special just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white rounded-full px-8 py-3.5 text-sm font-medium transition-colors duration-200 group"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white rounded-full px-8 py-3.5 text-sm font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  )
}
