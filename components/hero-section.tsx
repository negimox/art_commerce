"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ marginTop: "0px" }}
    >
      {/* ── Full-bleed background image ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/hero-shelf.png)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Left-side warm overlay so text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(245,237,224,0.97) 0%, rgba(245,237,224,0.92) 30%, rgba(245,237,224,0.70) 50%, rgba(245,237,224,0.0) 70%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-8 md:px-16"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
      >
        {/* Brand name — italic script style */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <p
            className="font-serif italic mb-4"
            style={{ color: "#8b4513", fontSize: "1.35rem", letterSpacing: "0.01em" }}
          >
            HimFlora
            <span className="ml-2 not-italic" style={{ color: "#d4a574" }}>✦</span>
          </p>
        </div>

        {/* Main headline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1
            className="font-serif leading-[1.12] mb-5"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              color: "#3d1a08",
              maxWidth: "480px",
            }}
          >
            Nature&apos;s Art,
            <br />
            <span style={{ color: "#6b2f0a" }}>Made for</span>
            <br />
            <em
              className="not-italic"
              style={{
                color: "#8b4513",
                fontStyle: "italic",
              }}
            >
              Your Home
            </em>
          </h1>
        </div>

        {/* Ornamental divider */}
        <div
          className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <div style={{ width: "40px", height: "1.5px", background: "#c49a6c" }} />
          <span style={{ color: "#c49a6c", fontSize: "1rem" }}>✿</span>
          <div style={{ width: "40px", height: "1.5px", background: "#c49a6c" }} />
        </div>

        {/* Subtitle */}
        <p
          className={`mb-8 leading-relaxed transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: "420ms",
            color: "#6b4423",
            fontSize: "0.95rem",
            maxWidth: "300px",
          }}
        >
          Handcrafted pressed flower art that celebrates
          culture, devotion &amp; timeless beauty.
        </p>

        {/* CTA button — matches reference "Explore Collection »»" */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "520ms" }}
        >
          <Link
            href="/shop"
            id="hero-explore-cta"
            className="group inline-flex items-center gap-2 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8b4513 0%, #b85c2a 100%)",
              padding: "13px 28px",
              fontSize: "0.92rem",
              boxShadow: "0 4px 18px rgba(139,69,19,0.35)",
            }}
          >
            <span className="relative z-10">Explore Collection</span>
            <span
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 font-bold"
              aria-hidden="true"
            >
              &#187;&#187;
            </span>
            {/* shimmer on hover */}
            <span
              className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
