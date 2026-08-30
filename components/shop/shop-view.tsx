"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import type { ShopProduct, ShopCategory, PriceRange } from "@/lib/supabase/queries"
import { FilterSidebar } from "./filter-sidebar"
import { ShopToolbar } from "./shop-toolbar"
import { ProductGrid } from "./product-grid"
import { ShopPagination } from "./shop-pagination"

const ITEMS_PER_PAGE = 12

interface ShopViewProps {
  category?: string
  initialProducts: ShopProduct[]
  shopCategories: ShopCategory[]
  priceRanges: PriceRange[]
}

export function ShopView({
  category = "Handmade Nature Frames",
  initialProducts,
  shopCategories,
  priceRanges,
}: ShopViewProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let products = [...initialProducts]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    if (selectedCategories.length > 0) {
      products = products.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPriceRanges.length > 0) {
      products = products.filter((p) =>
        selectedPriceRanges.some((idx) => {
          const range = priceRanges[idx]
          return p.price >= range.min && (range.max === null || p.price <= range.max)
        })
      )
    }

    // --- Sorting ---
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products.sort((a, b) => b.price - a.price)
        break
      case "newest":
        products.reverse()
        break
      default:
        break
    }

    return products
  }, [selectedCategories, selectedPriceRanges, sortBy, searchQuery, initialProducts])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
    setCurrentPage(1)
  }

  const handlePriceToggle = (idx: number) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setCurrentPage(1)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page title */}
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-serif font-normal text-zinc-900">
          {searchQuery ? `Search Results for "${searchQuery}"` : category}
        </h1>
        {searchQuery && (
          <p className="text-sm text-zinc-500">
            Found {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        )}
      </div>

      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 text-sm border border-zinc-200 rounded-lg px-4 py-2 text-zinc-700 hover:border-zinc-300 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {(selectedCategories.length > 0 || selectedPriceRanges.length > 0) && (
            <span className="ml-1 bg-[#4a3728] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
              {selectedCategories.length + selectedPriceRanges.length}
            </span>
          )}
        </button>
      </div>

      {/* Mobile filter drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-zinc-800">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 text-zinc-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterSidebar
              selectedCategories={selectedCategories}
              selectedPriceRanges={selectedPriceRanges}
              onCategoryToggle={handleCategoryToggle}
              onPriceRangeToggle={handlePriceToggle}
              onClearFilters={handleClearFilters}
              shopCategories={shopCategories}
              priceRanges={priceRanges}
            />
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="flex gap-8">
        {/* Sidebar (desktop) */}
        <div className="hidden md:block">
          <FilterSidebar
            selectedCategories={selectedCategories}
            selectedPriceRanges={selectedPriceRanges}
            onCategoryToggle={handleCategoryToggle}
            onPriceRangeToggle={handlePriceToggle}
            onClearFilters={handleClearFilters}
            shopCategories={shopCategories}
            priceRanges={priceRanges}
          />
        </div>

        {/* Right: Toolbar + Grid */}
        <div className="flex-1 min-w-0">
          <ShopToolbar
            totalItems={filteredProducts.length}
            currentPage={currentPage}
            itemsPerPage={ITEMS_PER_PAGE}
            viewMode={viewMode}
            sortBy={sortBy}
            onViewModeChange={setViewMode}
            onSortChange={(val) => {
              setSortBy(val)
              setCurrentPage(1)
            }}
          />

          <ProductGrid products={paginatedProducts} viewMode={viewMode} />

          <ShopPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  )
}
