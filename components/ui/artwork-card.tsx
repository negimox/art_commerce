"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, BadgeCheck, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"

export interface ArtworkCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  artwork: {
    id: string
    title: string
    image: string
    price: number
    originalPrice?: number
    category: string
    artist?: string
    dimensions?: string
    shippingStatus?: string
    badge?: string
  }
}

export const ArtworkCard = React.forwardRef<HTMLDivElement, ArtworkCardProps>(
  ({ className, artwork, ...props }, ref) => {
    const [isWishlisted, setIsWishlisted] = React.useState(false)
    const [added, setAdded] = React.useState(false)
    const { addItem } = useCart()

    function handleAddToCart(e: React.MouseEvent) {
      e.preventDefault()
      e.stopPropagation()
      addItem({
        id: artwork.id,
        name: artwork.title,
        price: artwork.price,
        image: artwork.image,
      })
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    }

    function handleWishlist(e: React.MouseEvent) {
      e.preventDefault()
      e.stopPropagation()
      setIsWishlisted((w) => !w)
    }

    return (
      <Card ref={ref} className={cn("border-none shadow-none bg-transparent group", className)} {...props}>
        <div className="relative overflow-hidden mb-4 rounded-sm">
          {/* Clickable image → product page */}
          <Link href={`/product/${artwork.id}`} className="block relative aspect-square overflow-hidden rounded-sm">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Badge */}
          {artwork.badge && (
            <div className="absolute top-2 left-2 bg-[#004b73] text-[#f7d648] text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm z-10 max-w-[80px] text-center leading-tight border border-[#f7d648]/20 pointer-events-none">
              {artwork.badge}
            </div>
          )}

          {/* Heart Button */}
          <button
            onClick={handleWishlist}
            className="absolute bottom-3 right-3 bg-white hover:bg-gray-50 transition-all duration-200 p-2 rounded-full shadow-md z-10 cursor-pointer hover:scale-110 group/heart"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted
                  ? "fill-rose-500 text-rose-500"
                  : "text-gray-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500"
              }`}
            />
          </button>
        </div>

        <CardContent className="p-0 space-y-3">
          {/* Clickable title → product page */}
          <Link href={`/product/${artwork.id}`}>
            <h3 className="font-sans text-[#333333] text-sm md:text-base font-normal leading-snug line-clamp-2 cursor-pointer hover:text-[#380b2d] transition-colors duration-200">
              {artwork.title}
            </h3>
          </Link>

          {/* Meta Info: Shipping & Dimensions */}
          <div className="flex justify-between items-center text-xs text-[#757575] font-medium">
            <span>{artwork.shippingStatus || "Made To Order"}</span>
            <span>{artwork.dimensions || "10 in X 10 in"}</span>
          </div>

          {/* Artist Info */}
          <div className="flex items-center gap-1 text-xs text-[#555555]">
            <span className="cursor-pointer hover:text-[#380b2d] transition-colors duration-200">
              Artist - {artwork.artist || "Unknown"}
            </span>
            <BadgeCheck className="w-3.5 h-3.5 text-[#1DA1F2]" />
          </div>
        </CardContent>

        <CardFooter className="p-0 pt-4">
          <Button
            onClick={handleAddToCart}
            className={`w-full text-white rounded-sm h-11 gap-2 font-medium tracking-wide transition-all duration-300 ${
              added
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-[#380b2d] hover:bg-[#280820]"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <div className="flex items-center gap-2">
                  <span>₹{artwork.price.toLocaleString()}</span>
                  {artwork.originalPrice && (
                    <span className="text-xs line-through text-white/60 font-normal">
                      ₹{artwork.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    )
  }
)

ArtworkCard.displayName = "ArtworkCard"
