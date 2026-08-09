"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const isScrolled = true
  const { itemCount } = useCart()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-4 pt-4" : ""}`}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${isScrolled
            ? "bg-white/70 backdrop-blur-xl border border-zinc-200 px-6 py-3"
            : "bg-background/90 backdrop-blur-md px-6 py-5"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span
              className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
            >
              Himflora
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#new-arrivals"
              onClick={(e) => handleSmoothScroll(e, "new-arrivals")}
              className={`text-sm transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              New Arrivals
            </a>
            <a
              href="#categories"
              onClick={(e) => handleSmoothScroll(e, "categories")}
              className={`text-sm transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Categories
            </a>
            <Link
              href="/shop"
              className={`text-sm transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop cart icon */}
          <div className="hidden md:flex items-center gap-1">
            <CartButton itemCount={itemCount} isScrolled={isScrolled} />
          </div>

          {/* Mobile: cart + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <CartButton itemCount={itemCount} isScrolled={isScrolled} />
            <button
              className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            className={`md:hidden mt-6 pb-6 flex flex-col gap-4 border-t pt-6 ${isScrolled ? "border-zinc-200" : "border-border"
              }`}
          >
            <a
              href="#new-arrivals"
              onClick={(e) => handleSmoothScroll(e, "new-arrivals")}
              className={`transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              New Arrivals
            </a>
            <a
              href="#categories"
              onClick={(e) => handleSmoothScroll(e, "categories")}
              className={`transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Categories
            </a>
            <Link
              href="/shop"
              className={`transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors cursor-pointer ${isScrolled ? "text-zinc-600 hover:text-black" : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

// ─── Cart Button ──────────────────────────────────────────────────────────────

function CartButton({
  itemCount,
  isScrolled,
}: {
  itemCount: number
  isScrolled: boolean
}) {
  return (
    <Link
      href="/cart"
      aria-label={`Cart – ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
      className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
        isScrolled
          ? "text-zinc-700 hover:text-black hover:bg-zinc-100"
          : "text-foreground hover:bg-foreground/10"
      }`}
    >
      <ShoppingBag className="w-5 h-5" />

      {/* Badge */}
      {itemCount > 0 && (
        <span
          className={`
            absolute -top-0.5 -right-0.5
            min-w-[18px] h-[18px] px-1
            flex items-center justify-center
            rounded-full text-[10px] font-semibold leading-none
            bg-black text-white
            animate-in zoom-in-75 duration-200
          `}
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  )
}
