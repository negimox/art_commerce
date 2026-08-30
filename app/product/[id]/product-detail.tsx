"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import type { UnifiedProduct } from "./page"
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
  product: UnifiedProduct
  related: UnifiedProduct[]
}

// Mini card for related products that doesn't depend on ArtworkCard
function RelatedCard({ product }: { product: UnifiedProduct }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault()
    addItem({ id: product.id, name: product.title, price: product.price, image: product.image })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link href={`/product/${product.id}`} className="group block bg-white border border-zinc-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative overflow-hidden aspect-square bg-zinc-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discountPercent && (
          <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            {product.discountPercent}% OFF
          </div>
        )}
      </div>
      <div className="p-3">
        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium mb-1 block">{product.category}</span>
        <h3 className="text-sm font-medium text-zinc-800 leading-snug line-clamp-2 group-hover:text-[#380b2d] transition-colors min-h-[2.5rem]">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-zinc-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-zinc-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-white transition-all duration-300 ${
            added ? "bg-emerald-600" : "bg-[#380b2d] hover:bg-[#280820]"
          }`}
        >
          {added ? <Check className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </Link>
  )
}

export function ProductDetail({ product, related }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState((product.sizes ?? ["Standard"])[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  
  const currentPrice = useMemo(() => {
    if (product.sizePricing && product.sizePricing.length > 0) {
      const sizePrice = product.sizePricing.find((sp) => sp.size === selectedSize)
      if (sizePrice) return sizePrice.price
    }
    return product.price
  }, [product.sizePricing, product.price, selectedSize])

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${selectedSize}`,
        name: `${product.title} (${selectedSize})`,
        price: currentPrice,
        image: product.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8 flex-wrap">
        <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 flex-shrink-0" />
        <Link href="/shop" className="hover:text-zinc-700 transition-colors capitalize">{product.category}</Link>
        <ChevronRight className="w-3 h-3 flex-shrink-0" />
        <span className="text-zinc-600 line-clamp-1 max-w-[240px]">{product.title}</span>
      </nav>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
        {/* Left: Image */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm border border-zinc-100 group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

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

            {product.shippingStatus && (
              <div
                className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  product.shippingStatus === "Ready to Ship"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-amber-500/90 text-white"
                }`}
              >
                {product.shippingStatus}
              </div>
            )}

            {product.discountPercent && (
              <div className="absolute bottom-4 left-4 bg-[#380b2d] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.discountPercent}% OFF
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
                className="flex flex-col items-center gap-2 bg-white border border-zinc-100 rounded-xl py-3.5 px-2 text-center"
              >
                <Icon className="w-4 h-4 text-[#380b2d]" />
                <span className="text-[10px] text-zinc-500 font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          {/* Category pill */}
          <span className="inline-flex self-start text-[10px] uppercase tracking-widest text-[#380b2d] font-semibold bg-[#380b2d]/8 px-3 py-1 rounded-full mb-4">
            {product.category}
          </span>

          <h1 className="font-serif text-2xl md:text-3xl text-zinc-900 leading-snug mb-4" style={{ fontWeight: 400 }}>
            {product.title}
          </h1>

          {product.artist && (
            <div className="flex items-center gap-1.5 mb-5">
              <span className="text-sm text-zinc-500">by</span>
              <span className="text-sm font-medium text-zinc-700">{product.artist}</span>
              <BadgeCheck className="w-4 h-4 text-[#1DA1F2]" />
            </div>
          )}

          {/* Stars */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s <= 4 ? "fill-amber-400 text-amber-400" : "text-zinc-200 fill-zinc-200"}`}
                />
              ))}
            </div>
            <span className="text-xs text-zinc-400">(24 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-zinc-100">
            <span className="text-3xl font-bold text-zinc-900">₹{currentPrice.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-zinc-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {product.discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {product.dimensions && (
            <div className="flex items-center gap-2 mb-5 text-sm text-zinc-600">
              <Truck className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              <span>Dimensions: <span className="font-medium text-zinc-800">{product.dimensions}</span></span>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-zinc-700 mb-3">
                Size: <span className="font-semibold text-zinc-900">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
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
                disabled={quantity === 1}
                className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:border-zinc-400 hover:bg-zinc-50 transition-all disabled:opacity-40"
              >
                <Minus className="w-4 h-4 text-zinc-600" />
              </button>
              <span className="w-12 text-center font-semibold text-zinc-900 text-lg select-none">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:border-zinc-400 hover:bg-zinc-50 transition-all"
              >
                <Plus className="w-4 h-4 text-zinc-600" />
              </button>
            </div>
          </div>

          {/* CTA */}
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
                <><Check className="w-5 h-5" /> Added to Cart!</>
              ) : (
                <><ShoppingCart className="w-5 h-5" /> Add to Cart — ₹{(currentPrice * quantity).toLocaleString()}</>
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
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">About This Piece</h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {product.description}. Each piece is handcrafted with care using traditional techniques,
              making every item truly one-of-a-kind. Perfect for home décor, gifting, or as a
              collector&apos;s item celebrating India&apos;s rich artistic heritage.
            </p>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-zinc-100">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-zinc-900 font-normal mb-2">You May Also Like</h2>
            <p className="text-sm text-zinc-500">More handcrafted pieces from the {product.category} collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
