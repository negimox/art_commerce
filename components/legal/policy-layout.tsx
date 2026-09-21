"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, ShieldCheck, Mail, MessageCircle } from "lucide-react"

export interface TocItem {
  id: string
  title: string
}

interface PolicyLayoutProps {
  badge: string
  title: string
  subtitle: string
  lastUpdated: string
  readTime: string
  tocItems: TocItem[]
  children: React.ReactNode
}

export function PolicyLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  readTime,
  tocItems,
  children,
}: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i]
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [tocItems])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 100
      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveId(id)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="relative px-6 py-16 md:py-24 bg-[#faf7f2] border-b border-zinc-200/60">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[440px] h-[440px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-[340px] h-[340px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-amber-800 mb-6 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-3">
            {badge}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-zinc-900 mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 pt-4 border-t border-zinc-200/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Official Himflora Policy
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              Last updated: {lastUpdated}
            </span>
            <span>Est. read: {readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ─────────────────────────────────── */}
      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden md:block md:col-span-4 sticky top-28 space-y-6">
            <div className="bg-[#faf7f2] border border-zinc-200/70 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                On This Page
              </h3>
              <nav className="space-y-1.5">
                {tocItems.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`block py-1.5 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-amber-700 text-white shadow-sm font-semibold translate-x-1"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50"
                      }`}
                    >
                      {item.title}
                    </a>
                  )
                })}
              </nav>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-2xl border border-amber-200/60 bg-amber-50/50 p-5 text-xs text-zinc-600 space-y-3">
              <p className="font-semibold text-zinc-900">Need clarification?</p>
              <p className="leading-relaxed text-zinc-600">
                Our support team is here to assist with any questions regarding our policies or your order.
              </p>
              <div className="flex flex-col gap-2 pt-1 font-medium">
                <a
                  href="mailto:contact.himflora@gmail.com"
                  className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  contact.himflora@gmail.com
                </a>
                <a
                  href="https://wa.me/918171776251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Text Content */}
          <div className="md:col-span-8 space-y-10 text-zinc-700 leading-relaxed text-sm md:text-base">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}
