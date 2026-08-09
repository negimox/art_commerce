"use client"

import { useState } from "react"
import Link from "next/link"
import { ArtworkCard } from "@/components/ui/artwork-card"
import { useCart } from "@/context/cart-context"
import type { Artwork } from "@/lib/artworks"
import {
  ShoppingCart,
  Heart,
  BadgeCheck,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Star,
  Shield,
  RefreshCw,
  Package,
  Truck,
} from "lucide-react"

interface ProductDetailProps {
  artwork: Artwork
  related: Artwork[]
}

export function ProductDetail({ artwork, related }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(artwork.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const discountPercent = artwork.originalPrice
    ? Math.round((1 - artwork.price / artwork.originalPrice) * 100)
    : null

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${artwork.id}-${selectedSize}`,
        name: `${artwork.title} (${selectedSize})`,
        price: artwork.price,
        image: artwork.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8 flex-wrap">
        <Link href="/" className="hover:text-zinc-700 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 flex-shrink-0" />
        <Link href="/#curated" className="hover:text-zinc-700 transition-colors capitalize">
          {artwork.category}
        </Link>
        <ChevronRight className="w-3 h-3 flex-shrink-0" />
        <span className="text-zinc-600 line-clamp-1 max-w-[240px]">{artwork.title}</span>
      </nav>

      {/* ── Main Product Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
        {/* ── Left: Image ── */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm border border-zinc-100 group">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-103"
              style={{ transform: "scale(1)" }}
            />

            {/* Wishlist button */}
            <button
              onClick={() => setIsWishlisted((w) => !w)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-all duration-200"
              aria-label="Add to wishlist"
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-200 ${
                  isWishlisted ? "fill-rose-500 text-rose-500" : "text-zinc-400"
                }`}
              />
            </button>

            {/* Shipping badge */}
            {artwork.shippingStatus && (
              <div
                className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
                  artwork.shippingStatus === "Ready to Ship"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-amber-500/90 text-white"
                }`}
              >
                {artwork.shippingStatus}
              </div>
            )}

            {/* Discount ribbon */}
            {discountPercent && (
              <div className="absolute bottom-4 left-4 bg-[#380b2d] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {discountPercent}% OFF
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Shield, label: "Secure Payment" },
              { icon: RefreshCw, label: "Easy Returns" },
              { icon: Package, label: "Handcrafted" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 bg-white border border-zinc-100 rounded-xl py-3.5 px-2 text-center hover:border-zinc-200 transition-colors"
              >
                <Icon className="w-4 h-4 text-[#380b2d]" />
                <span className="text-[10px] text-zinc-500 font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Info ── */}
        <div className="flex flex-col">
          {/* Category pill */}
          <span className="inline-flex self-start text-[10px] uppercase tracking-widest text-[#380b2d] font-semibold bg-[#380b2d]/8 px-3 py-1 rounded-full mb-4">
            {artwork.category}
          </span>

          {/* Title */}
          <h1
            className="font-serif text-2xl md:text-3xl xl:text-[2rem] text-zinc-900 leading-snug mb-4"
            style={{ fontWeight: 400 }}
          >
            {artwork.title}
          </h1>

          {/* Artist */}
          <div className="flex items-center gap-1.5 mb-5">
            <span className="text-sm text-zinc-500">by</span>
            <span className="text-sm font-medium text-zinc-700">
              {artwork.artist || "Unknown Artist"}
            </span>
            <BadgeCheck className="w-4 h-4 text-[#1DA1F2]" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s <= 4
                      ? "fill-amber-400 text-amber-400"
                      : "text-zinc-200 fill-zinc-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-zinc-400">(24 reviews)</span>
            <span className="text-xs text-[#380b2d] font-medium cursor-pointer hover:underline">
              Read reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-zinc-100">
            <span className="text-3xl font-bold text-zinc-900">
              ₹{artwork.price.toLocaleString()}
            </span>
            {artwork.originalPrice && (
              <>
                <span className="text-lg text-zinc-400 line-through">
                  ₹{artwork.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {/* Dimensions */}
          {artwork.dimensions && (
            <div className="flex items-center gap-2 mb-5 text-sm text-zinc-600">
              <Truck className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              <span>
                Dimensions:{" "}
                <span className="font-medium text-zinc-800">{artwork.dimensions}</span>
              </span>
            </div>
          )}

          {/* Size Selector */}
          {artwork.sizes && artwork.sizes.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-zinc-700 mb-3">
                Size:{" "}
                <span className="font-semibold text-zinc-900">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {artwork.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-[#380b2d] text-white border-[#380b2d] shadow-sm"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-[#380b2d] hover:text-[#380b2d]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm font-medium text-zinc-700 mb-3">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-150 disabled:opacity-40"
                disabled={quantity === 1}
              >
                <Minus className="w-4 h-4 text-zinc-600" />
              </button>
              <span className="w-12 text-center font-semibold text-zinc-900 text-lg select-none">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-150"
              >
                <Plus className="w-4 h-4 text-zinc-600" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              id="product-add-to-cart"
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 ${
                added
                  ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200 shadow-md"
                  : "bg-[#380b2d] hover:bg-[#280820] hover:shadow-lg hover:shadow-[#380b2d]/20 hover:-translate-y-0.5"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart — ₹{(artwork.price * quantity).toLocaleString()}
                </>
              )}
            </button>

            <button
              id="product-buy-now"
              className="sm:px-8 py-4 rounded-xl border-2 border-[#380b2d] text-[#380b2d] font-semibold text-sm hover:bg-[#380b2d] hover:text-white transition-all duration-300"
            >
              Buy Now
            </button>
          </div>

          {/* Description */}
          <div className="bg-white border border-zinc-100 rounded-xl p-5">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
              About This Piece
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {artwork.description}. Each piece is handcrafted with care using traditional
              techniques, making every artwork truly one-of-a-kind. Perfect for home décor,
              gifting, or as a collector&apos;s item celebrating India&apos;s rich artistic
              heritage.
            </p>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-zinc-100">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-zinc-900 font-normal mb-2">
              You May Also Like
            </h2>
            <p className="text-sm text-zinc-500">
              More handcrafted pieces from the {artwork.category} collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((a) => (
              <ArtworkCard key={a.id} artwork={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
