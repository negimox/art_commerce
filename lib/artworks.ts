export interface Artwork {
  id: string
  title: string
  image: string
  price: number
  category: string
  sizes: string[]
  description: string
  featured?: boolean
  artist?: string
  dimensions?: string
  shippingStatus?: "Made To Order" | "Ready to Ship"
  originalPrice?: number
  badge?: string
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Coffee and Conversation: A Phad Painting by Kalyan Joshi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.29%20%281%29-ujt9yCH9WI5coeh72wOIAF1B0YFmj0.jpeg",
    price: 1500,
    category: "Hanging Florals",
    sizes: ["A4", "A3", "A2"],
    description: "Delicate pressed flowers in warm burgundy and complementary earth tones",
    featured: true,
    artist: "Sanjay",
    dimensions: "10 in x 10 in",
    shippingStatus: "Made To Order",
  },
  {
    id: "2",
    title: "At the Heart of the blue: Wings and Fins in Warli painting by Dilip Bahotha",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.24%20%281%29-ML8LgaJd7oGeeyP4VaOSM2ubRwwz1i.jpeg",
    price: 1800,
    category: "Botanical",
    sizes: ["A4", "A3"],
    description: "Vibrant coral flowers with botanical accent leaves on soft background",
    featured: true,
    artist: "Sanjay",
    dimensions: "10 in x 10 in",
    shippingStatus: "Ready to Ship",
    originalPrice: 2000,
  },
  {
    id: "3",
    title: "Sharad Poornima (merged with Daan Leela and Annakoot) in Pichwai by Sanjay",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.31%20%281%29-3rYj0ZOMfQ8QixAlnwKeuPxkSBTYeW.jpeg",
    price: 2300,
    category: "Hanging Florals",
    sizes: ["A4", "A3", "A2"],
    description: "Ornate golden frame with delicate pressed flowers and ferns",
    featured: true,
    artist: "Sanjay",
    dimensions: "72 in x 60 in",
    shippingStatus: "Made To Order",
  },
  {
    id: "4",
    title: "Sky Dreams",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.31%20%281%29-3rYj0ZOMfQ8QixAlnwKeuPxkSBTYeW.jpeg",
    price: 999,
    category: "Botanical",
    sizes: ["A4", "A3"],
    description: "Minimalist design with delicate fern branches and small flowers",
  },
  {
    id: "5",
    title: "Sunset Petals",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.30%20%282%29-oJRyotjoETrIF5nSkuLVkqW1ATvSE1.jpeg",
    price: 1149,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Warm tones with mixed pressed flowers in natural arrangement",
  },
  {
    id: "6",
    title: "Meadow Dreams",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.29-5p0hK1EKbsLZ7o5j92mx1sRR9rfnlv.jpeg",
    price: 1299,
    category: "Hanging Florals",
    sizes: ["A4", "A3", "A2"],
    description: "Artistic composition with varied flower types and foliage",
  },
  {
    id: "7",
    title: "Rose Symphony",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.30%20%281%29-UxXR2TMKoRobHtm2kGTWub8O63qyVn.jpeg",
    price: 1349,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Bold red flowers with pink flower and yellow highlights",
  },
  {
    id: "8",
    title: "Fern Whispers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.31%20%282%29-WhnZ8UKrmh5tTEYYeBefZjRdayyBmn.jpeg",
    price: 899,
    category: "Hanging Florals",
    sizes: ["A4", "A3"],
    description: "Delicate ferns with small accent flowers in elegant frame",
  },
  {
    id: "9",
    title: "Garden Bliss",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.30-gnFzvxoL2QtkFv13spYvgZR3apZeFk.jpeg",
    price: 1249,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Mixed colorful flowers with rich burgundy tones and natural ferns",
  },
  {
    id: "10",
    title: "Floral Cascade",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-05%20at%2023.33.31-lCE3K154MCl1C5Oan02itByb41D5pa.jpeg",
    price: 1199,
    category: "Hanging Florals",
    sizes: ["A4", "A3", "A2"],
    description: "Beautiful arrangement of pressed flowers in warm and cool tones",
  },
]

export const categories = [
  { name: "Hanging Florals", count: 5 },
  { name: "Botanical", count: 5 },
]
