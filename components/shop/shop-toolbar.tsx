"use client"

import { LayoutGrid, LayoutList, ChevronDown } from "lucide-react"
import { sortOptions } from "@/lib/shop-data"

interface ShopToolbarProps {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  viewMode: "grid" | "list"
  sortBy: string
  onViewModeChange: (mode: "grid" | "list") => void
  onSortChange: (value: string) => void
}

export function ShopToolbar({
  totalItems,
  currentPage,
  itemsPerPage,
  viewMode,
  sortBy,
  onViewModeChange,
  onSortChange,
}: ShopToolbarProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-zinc-100">
      {/* Left: View toggle + item count */}
      <div className="flex items-center gap-4">
        {/* View toggle buttons */}
        <div className="flex items-center gap-1 bg-zinc-100 rounded-lg p-1">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1.5 rounded-md transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-white text-zinc-800 shadow-sm"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-1.5 rounded-md transition-all duration-200 ${
              viewMode === "list"
                ? "bg-white text-zinc-800 shadow-sm"
                : "text-zinc-400 hover:text-zinc-600"
            }`}
            aria-label="List view"
          >
            <LayoutList className="w-4 h-4" />
          </button>
        </div>

        {/* Item count */}
        <span className="text-sm text-zinc-500">
          Items{" "}
          <span className="text-zinc-800 font-medium">
            {startItem}–{endItem}
          </span>{" "}
          of{" "}
          <span className="text-zinc-800 font-medium">{totalItems.toLocaleString()}</span>
        </span>
      </div>

      {/* Right: Sort */}
      <div className="flex items-center gap-2.5">
        <span className="text-sm text-zinc-500 whitespace-nowrap">Sort By</span>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-white border border-zinc-200 text-zinc-700 text-sm rounded-lg px-3 py-1.5 pr-8 cursor-pointer hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/20 focus:border-[#4a3728]/50 transition-colors"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
