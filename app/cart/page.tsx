"use client"

import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, itemCount, totalPrice, removeItem, updateQuantity, clearCart } = useCart()

  const shipping = totalPrice > 0 ? (totalPrice >= 2000 ? 0 : 99) : 0
  const grandTotal = totalPrice + shipping

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#fafaf8] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-zinc-400" />
          </div>
          <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Your cart is empty</h1>
          <p className="text-zinc-500 mb-8">
            Looks like you haven&apos;t added anything yet. Browse our collection and find something you love.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#fafaf8] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-semibold text-zinc-900">
            Shopping Cart{" "}
            <span className="text-zinc-400 font-normal text-xl">({itemCount} {itemCount === 1 ? "item" : "items"})</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 flex gap-4 sm:gap-5 items-start border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-base font-medium text-zinc-900 leading-snug">{item.name}</h2>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex-shrink-0 text-zinc-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-zinc-900 font-semibold mt-1">₹{item.price.toLocaleString("en-IN")}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-zinc-100 rounded-full p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white text-zinc-600 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-zinc-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white text-zinc-600 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-xs text-zinc-400">
                      Subtotal:{" "}
                      <span className="font-medium text-zinc-700">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-sm text-zinc-400 hover:text-red-500 transition-colors flex items-center gap-1.5 mt-2"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear all items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-zinc-900 mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    <span>₹{shipping}</span>
                  )}
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-zinc-400 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    Free shipping on orders above ₹1,000
                  </p>
                )}
                <div className="border-t border-zinc-100 pt-3 flex justify-between text-base font-semibold text-zinc-900">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-zinc-900 text-white py-3.5 rounded-full font-medium text-sm hover:bg-zinc-700 transition-colors active:scale-95 duration-150">
                Proceed to Checkout
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
