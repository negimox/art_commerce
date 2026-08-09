export interface ShopProduct {
  id: string
  title: string
  image: string
  price: number
  originalPrice?: number
  category: string
  discountPercent?: number
  rating?: number
  reviewCount?: number
  badge?: string
  isNew?: boolean
}

export interface PriceRange {
  label: string
  min: number
  max: number | null
  count: number
}

export interface ShopCategory {
  name: string
  count: number
}

export const shopCategories: ShopCategory[] = [
  { name: "Place Mats", count: 56 },
  { name: "Potholders & Oven Mitts", count: 3 },
  { name: "Dish Cloths & Towels", count: 2 },
  { name: "Table Napkins", count: 11 },
  { name: "Kitchen Utilities", count: 423 },
  { name: "Table Mats", count: 116 },
  { name: "Copper Bottle", count: 11 },
  { name: "Water Bottle", count: 27 },
]

export const priceRanges: PriceRange[] = [
  { label: "₹0.00 - ₹999.99", min: 0, max: 999.99, count: 341 },
  { label: "₹1,000 - ₹1,999.99", min: 1000, max: 1999.99, count: 138 },
  { label: "₹2,000 - ₹2,999.99", min: 2000, max: 2999.99, count: 81 },
  { label: "₹3,000 - ₹3,999.99", min: 3000, max: 3999.99, count: 28 },
  { label: "₹4,000 - ₹4,999.99", min: 4000, max: 4999.99, count: 19 },
  { label: "₹5,000 - ₹5,999.99", min: 5000, max: 5999.99, count: 10 },
  { label: "₹6,000 - ₹6,999.99", min: 6000, max: 6999.99, count: 1 },
  { label: "₹7,000 - ₹7,999.99", min: 7000, max: 7999.99, count: 1 },
  { label: "₹8,000 - ₹8,999.99", min: 8000, max: 8999.99, count: 2 },
  { label: "₹21,000 and above", min: 21000, max: null, count: 3 },
]

export const shopProducts: ShopProduct[] = [
  {
    id: "sp-1",
    title: "Pure Brass Mughlai Style Glass | 250 Ml | Set Of 4",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png",
    price: 1700,
    originalPrice: 3400,
    category: "Kitchen Utilities",
    discountPercent: 50,
  },
  {
    id: "sp-2",
    title: "Handcrafted Pure Copper Glasses | 320 Ml | Set Of 2",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png",
    price: 700,
    originalPrice: 1400,
    category: "Copper Bottle",
    discountPercent: 50,
  },
  {
    id: "sp-3",
    title: "Hammered Design Copper Steel Glass | 250 Ml | Set Of 6",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png",
    price: 1700,
    originalPrice: 3400,
    category: "Kitchen Utilities",
    discountPercent: 50,
  },
  {
    id: "sp-4",
    title: "Terracotta Water Bottle With Floral Painting",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_797yu7797yu7797y%20%281%29.png",
    price: 420,
    category: "Water Bottle",
  },
  {
    id: "sp-5",
    title: "Handmade Water Bottle",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_700uri700uri700u%20%281%29.png",
    price: 380,
    category: "Water Bottle",
  },
  {
    id: "sp-6",
    title: "Terracotta Water Bottle",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_p9qf5ip9qf5ip9qf%20%281%29.png",
    price: 350,
    category: "Water Bottle",
  },
  {
    id: "sp-7",
    title: "Handmade Terracotta Mug Heat-Resistant",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_ljo2m6ljo2m6ljo2%20%281%29.png",
    price: 299,
    category: "Kitchen Utilities",
  },
  {
    id: "sp-8",
    title: "Handmade Mug Heat-Resistant",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_au7wv7au7wv7au7w%20%281%29.png",
    price: 249,
    category: "Kitchen Utilities",
  },
  {
    id: "sp-9",
    title: "Traditional Brass Serving Bowl Set",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_fznjfkfznjfkfznj%20%281%29.png",
    price: 2200,
    originalPrice: 4400,
    category: "Kitchen Utilities",
    discountPercent: 50,
  },
  {
    id: "sp-10",
    title: "Copper Water Pitcher with Lid",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png",
    price: 1850,
    originalPrice: 2500,
    category: "Copper Bottle",
    discountPercent: 26,
  },
  {
    id: "sp-11",
    title: "Handwoven Cotton Place Mat Set of 6",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png",
    price: 599,
    category: "Place Mats",
  },
  {
    id: "sp-12",
    title: "Embroidered Table Runner 72 inch",
    image:
      "https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png",
    price: 899,
    originalPrice: 1200,
    category: "Table Mats",
    discountPercent: 25,
  },
]

export const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Best Selling", value: "best-selling" },
]
