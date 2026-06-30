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
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png",
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
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png",
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
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png",
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
    title: "Sunset Petals",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_797yu7797yu7797y%20%281%29.png",
    price: 1149,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Warm tones with mixed pressed flowers in natural arrangement",
  },
  {
    id: "5",
    title: "Meadow Dreams",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_700uri700uri700u%20%281%29.png",
    price: 1299,
    category: "Hanging Florals",
    sizes: ["A4", "A3", "A2"],
    description: "Artistic composition with varied flower types and foliage",
  },
  {
    id: "6",
    title: "Rose Symphony",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_p9qf5ip9qf5ip9qf%20%281%29.png",
    price: 1349,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Bold red flowers with pink flower and yellow highlights",
  },
  {
    id: "7",
    title: "Fern Whispers",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_ljo2m6ljo2m6ljo2%20%281%29.png",
    price: 899,
    category: "Hanging Florals",
    sizes: ["A4", "A3"],
    description: "Delicate ferns with small accent flowers in elegant frame",
  },
  {
    id: "8",
    title: "Garden Bliss",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_au7wv7au7wv7au7w%20%281%29.png",
    price: 1249,
    category: "Botanical",
    sizes: ["A4", "A3", "A2"],
    description: "Mixed colorful flowers with rich burgundy tones and natural ferns",
  },
  {
    id: "9",
    title: "Floral Cascade",
    image: "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_fznjfkfznjfkfznj%20%281%29.png",
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
