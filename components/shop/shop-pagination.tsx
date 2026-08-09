"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface ShopPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ShopPagination({ currentPage, totalPages, onPageChange }: ShopPaginationProps) {
  if (totalPages <= 1) return null

  const getPages = () => {
    const pages: (number | "...")[] = []
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    pages.push(1)
    if (currentPage > 3) pages.push("...")
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push("...")
    pages.push(totalPages)
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-8 pt-6 border-t border-zinc-100">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPages().map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-zinc-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
              currentPage === page
                ? "bg-[#4a3728] text-white border border-[#4a3728]"
                : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
