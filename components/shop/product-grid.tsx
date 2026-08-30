"use client"

import type { ShopProduct } from "@/lib/supabase/queries"
import { ProductCard } from "./product-card"

interface ProductGridProps {
  products: ShopProduct[]
  viewMode: "grid" | "list"
}

function ProductGridSkeleton({ viewMode }: { viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-5 h-36 rounded-xl overflow-hidden bg-zinc-50 animate-pulse">
            <div className="w-44 bg-zinc-200 flex-shrink-0" />
            <div className="flex-1 py-4 pr-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2.5 bg-zinc-200 rounded w-1/4" />
                <div className="h-3 bg-zinc-200 rounded w-3/4" />
                <div className="h-3 bg-zinc-200 rounded w-1/2" />
              </div>
              <div className="h-3 bg-zinc-200 rounded w-1/5" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-zinc-50 animate-pulse">
          <div className="aspect-[4/3] bg-zinc-200" />
          <div className="p-3 space-y-2">
            <div className="h-2 bg-zinc-200 rounded w-1/3" />
            <div className="h-3 bg-zinc-200 rounded w-full" />
            <div className="h-3 bg-zinc-200 rounded w-3/4" />
            <div className="h-3 bg-zinc-200 rounded w-1/4 mt-1" />
          </div>
        </div>
      ))}
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h3 className="text-base font-medium text-zinc-700 mb-1">No products found</h3>
      <p className="text-sm text-zinc-400">Try adjusting your filters to find what you&apos;re looking for.</p>
    </div>
  )
}

export function ProductGrid({ products, viewMode }: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState />
  }

  if (viewMode === "list") {
    return (
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode="list" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode="grid" />
      ))}
    </div>
  )
}

ProductGrid.Skeleton = ProductGridSkeleton
