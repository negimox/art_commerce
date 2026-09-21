"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Eye, Check } from "lucide-react"
import type { ShopProduct } from "@/lib/supabase/queries"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  product: ShopProduct
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted((w) => !w)
  }

  if (viewMode === "list") {
    return (
      <Link
        href={`/product/${product.id}`}
        className="group flex gap-5 bg-white border border-zinc-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:border-zinc-200"
      >
        {/* Image */}
        <div className="relative w-44 min-h-[140px] flex-shrink-0 overflow-hidden bg-zinc-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.discountPercent && (
            <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {product.discountPercent}% OFF
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between py-4 pr-4 flex-1">
          <div>
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-medium mb-1 block">
              {product.category}
            </span>
            <h3 className="text-sm font-medium text-zinc-800 leading-snug line-clamp-2 group-hover:text-[#4a3728] transition-colors">
              {product.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-zinc-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-sm text-zinc-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-1.5 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                added ? "bg-emerald-500" : "bg-[#4a3728] hover:bg-[#3a2718]"
              }`}
            >
              {added ? <Check className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
              {added ? "Added!" : "Add"}
            </button>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="group relative bg-white border border-zinc-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-200">
      {/* Clickable image → product page */}
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-zinc-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount badge */}
        {product.discountPercent && (
          <div className="absolute top-2.5 left-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
            {product.discountPercent}% OFF
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-rose-500 text-rose-500" : "text-zinc-500"}`}
          />
        </button>

        {/* Hover action overlay */}
        <div className="absolute inset-x-0 bottom-0 flex gap-2 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 text-white text-xs py-2 rounded-lg transition-all duration-300 shadow-md ${
              added ? "bg-emerald-500" : "bg-[#4a3728] hover:bg-[#3a2718]"
            }`}
          >
            {added ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
            {added ? "Added!" : "Add to Cart"}
          </button>
          <Link
            href={`/product/${product.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 flex items-center justify-center bg-white text-zinc-700 rounded-lg hover:bg-zinc-100 transition-colors shadow-md flex-shrink-0"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </Link>

      {/* Product info */}
      <Link href={`/product/${product.id}`} className="block p-3">
        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium mb-1 block">
          {product.category}
        </span>
        <h3 className="text-sm font-medium text-zinc-800 leading-snug line-clamp-2 group-hover:text-[#4a3728] transition-colors min-h-[2.5rem]">
          {product.title}
        </h3>

        {/* Price row */}
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold text-zinc-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-xs text-zinc-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                {product.discountPercent}% OFF
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  )
}
