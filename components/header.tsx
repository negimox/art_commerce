"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const isScrolled = true
  const { itemCount } = useCart()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Handle ESC key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleQuickSearch = (term: string) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    router.push(`/shop?search=${encodeURIComponent(term)}`)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsOpen(false)

    // If not on the home page, navigate there first with the hash
    if (window.location.pathname !== "/") {
      router.push(`/#${targetId}`)
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
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
          {/* Mobile: hamburger */}
          <button
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              isScrolled
                ? "text-zinc-700 hover:text-black hover:bg-zinc-100"
                : "text-foreground hover:bg-foreground/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  : "text-foreground hover:bg-foreground/10"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <CartButton itemCount={itemCount} isScrolled={isScrolled} />
          </div>

          {/* Mobile: cart */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  : "text-foreground hover:bg-foreground/10"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <CartButton itemCount={itemCount} isScrolled={isScrolled} />
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

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-start justify-center pt-24 px-4 animate-in fade-in duration-300">
          <div 
            className="bg-white/90 backdrop-blur-xl border border-zinc-200 w-full max-w-2xl rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-12 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-zinc-950">Search Himflora</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="relative mb-6">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artworks, categories, or styles..."
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3.5 pl-12 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            </form>

            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {["Pichwai", "Warli", "Botanical", "Hanging Florals", "Nature Frames"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="text-xs text-zinc-600 hover:text-black bg-zinc-100 hover:bg-zinc-200/80 px-3 py-1.5 rounded-full transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Click background to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}
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
