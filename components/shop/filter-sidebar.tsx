"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import type { ShopCategory, PriceRange } from "@/lib/supabase/queries"

interface FilterSidebarProps {
  selectedCategories: string[]
  selectedPriceRanges: number[]
  onCategoryToggle: (category: string) => void
  onPriceRangeToggle: (index: number) => void
  onClearFilters: () => void
  shopCategories: ShopCategory[]
  priceRanges: PriceRange[]
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-zinc-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-1 group"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        ) : (
          <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export function FilterSidebar({
  selectedCategories,
  selectedPriceRanges,
  onCategoryToggle,
  onPriceRangeToggle,
  onClearFilters,
  shopCategories,
  priceRanges,
}: FilterSidebarProps) {
  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0

  return (
    <aside className="w-56 flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-zinc-700">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-[11px] text-[#4a3728] hover:text-[#3a2718] font-medium underline underline-offset-2 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-0">
        {/* Category Filter */}
        <FilterSection title="Category">
          <ul className="space-y-2">
            {shopCategories.map((cat) => {
              const isSelected = selectedCategories.includes(cat.name)
              return (
                <li key={cat.name}>
                  <button
                    onClick={() => onCategoryToggle(cat.name)}
                    className={`w-full flex items-center justify-between text-left transition-colors group ${
                      isSelected ? "text-[#4a3728]" : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {/* custom checkbox */}
                      <span
                        className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#4a3728] border-[#4a3728]"
                            : "border-zinc-300 group-hover:border-zinc-500"
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm leading-none">{cat.name}</span>
                    </div>
                    <span className="text-xs text-zinc-400 ml-1">({cat.count})</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </FilterSection>

        {/* Price Filter */}
        <FilterSection title="Price">
          <ul className="space-y-2">
            {priceRanges.map((range, index) => {
              const isSelected = selectedPriceRanges.includes(index)
              return (
                <li key={index}>
                  <button
                    onClick={() => onPriceRangeToggle(index)}
                    className={`w-full flex items-center justify-between text-left transition-colors group ${
                      isSelected ? "text-[#4a3728]" : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#4a3728] border-[#4a3728]"
                            : "border-zinc-300 group-hover:border-zinc-500"
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                      </span>
                      <span className="text-xs leading-none">{range.label}</span>
                    </div>
                    <span className="text-xs text-zinc-400 ml-1">({range.count})</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </FilterSection>
      </div>
    </aside>
  )
}
