-- ============================================================
-- HimFlora / ArtCommerce – Seed Data
-- Synced with lib/artworks.ts and lib/shop-data.ts
--
-- IDEMPOTENT: Delete existing seed rows first, then re-insert.
-- Run AFTER schema.sql has been applied.
-- ============================================================

-- ─────────────────────────────────────────────
-- Clean up existing seed data (safe to re-run)
-- ─────────────────────────────────────────────

delete from products where slug in (
  -- artworks
  'coffee-and-conversation-phad-painting',
  'at-the-heart-of-the-blue-warli-painting',
  'sharad-poornima-pichwai-by-sanjay',
  'sunset-petals',
  'meadow-dreams',
  'rose-symphony',
  'fern-whispers',
  'garden-bliss',
  'floral-cascade',
  -- shop products
  'pure-brass-mughlai-style-glass-250ml-set-4',
  'handcrafted-pure-copper-glasses-320ml-set-2',
  'hammered-design-copper-steel-glass-250ml-set-6',
  'terracotta-water-bottle-floral-painting',
  'handmade-water-bottle',
  'terracotta-water-bottle',
  'handmade-terracotta-mug-heat-resistant',
  'handmade-mug-heat-resistant',
  'traditional-brass-serving-bowl-set',
  'copper-water-pitcher-with-lid',
  'handwoven-cotton-place-mat-set-6',
  'embroidered-table-runner-72-inch'
);

-- ─────────────────────────────────────────────
-- ARTWORKS  (type = 'artwork')
-- Source: lib/artworks.ts
-- ─────────────────────────────────────────────

insert into products (
  title, description, price, original_price, discount_percent,
  category, image_url, images, badge, is_new,
  artist, dimensions, shipping_status, sizes, size_pricing, slug, type, stock_quantity, is_active
) values

-- id "1"
(
  'Coffee and Conversation: A Phad Painting by Kalyan Joshi',
  'Delicate pressed flowers in warm burgundy and complementary earth tones',
  1500, null, null, 'Hanging Florals',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png',
  '{}', null, true, 'Sanjay', '10 in x 10 in', 'Made To Order',
  array['A4','A3','A2'], '[{"size": "A4", "price": 1500}, {"size": "A3", "price": 2000}, {"size": "A2", "price": 2500}]'::jsonb, 'coffee-and-conversation-phad-painting', 'artwork', 10, true
),

-- id "2"
(
  'At the Heart of the blue: Wings and Fins in Warli painting by Dilip Bahotha',
  'Vibrant coral flowers with botanical accent leaves on soft background',
  1800, 2000, 10, 'Botanical',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png',
  '{}', null, true, 'Sanjay', '10 in x 10 in', 'Ready to Ship',
  array['A4','A3'], '[{"size": "A4", "price": 1800}, {"size": "A3", "price": 2200}]'::jsonb, 'at-the-heart-of-the-blue-warli-painting', 'artwork', 5, true
),

-- id "3"
(
  'Sharad Poornima (merged with Daan Leela and Annakoot) in Pichwai by Sanjay',
  'Ornate golden frame with delicate pressed flowers and ferns',
  2300, null, null, 'Hanging Florals',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png',
  '{}', null, true, 'Sanjay', '72 in x 60 in', 'Made To Order',
  array['A4','A3','A2'], '[{"size": "A4", "price": 2300}, {"size": "A3", "price": 2800}, {"size": "A2", "price": 3200}]'::jsonb, 'sharad-poornima-pichwai-by-sanjay', 'artwork', 3, true
),

-- id "4"
(
  'Sunset Petals',
  'Warm tones with mixed pressed flowers in natural arrangement',
  1149, null, null, 'Botanical',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_797yu7797yu7797y%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3','A2'], '[{"size": "A4", "price": 1149}, {"size": "A3", "price": 1500}, {"size": "A2", "price": 2000}]'::jsonb, 'sunset-petals', 'artwork', 10, true
),

-- id "5"
(
  'Meadow Dreams',
  'Artistic composition with varied flower types and foliage',
  1299, null, null, 'Hanging Florals',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_700uri700uri700u%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3','A2'], '[{"size": "A4", "price": 1299}, {"size": "A3", "price": 1700}, {"size": "A2", "price": 2100}]'::jsonb, 'meadow-dreams', 'artwork', 10, true
),

-- id "6"
(
  'Rose Symphony',
  'Bold red flowers with pink flower and yellow highlights',
  1349, null, null, 'Botanical',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_p9qf5ip9qf5ip9qf%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3','A2'], '[{"size": "A4", "price": 1349}, {"size": "A3", "price": 1800}, {"size": "A2", "price": 2200}]'::jsonb, 'rose-symphony', 'artwork', 10, true
),

-- id "7"
(
  'Fern Whispers',
  'Delicate ferns with small accent flowers in elegant frame',
  899, null, null, 'Hanging Florals',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_ljo2m6ljo2m6ljo2%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3'], '[{"size": "A4", "price": 899}, {"size": "A3", "price": 1200}]'::jsonb, 'fern-whispers', 'artwork', 10, true
),

-- id "8"
(
  'Garden Bliss',
  'Mixed colorful flowers with rich burgundy tones and natural ferns',
  1249, null, null, 'Botanical',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_au7wv7au7wv7au7w%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3','A2'], '[{"size": "A4", "price": 1249}, {"size": "A3", "price": 1600}, {"size": "A2", "price": 2000}]'::jsonb, 'garden-bliss', 'artwork', 10, true
),

-- id "9"
(
  'Floral Cascade',
  'Beautiful arrangement of pressed flowers in warm and cool tones',
  1199, null, null, 'Hanging Florals',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_fznjfkfznjfkfznj%20%281%29.png',
  '{}', null, false, null, null, null,
  array['A4','A3','A2'], '[{"size": "A4", "price": 1199}, {"size": "A3", "price": 1500}, {"size": "A2", "price": 1900}]'::jsonb, 'floral-cascade', 'artwork', 10, true
);

-- ─────────────────────────────────────────────
-- SHOP PRODUCTS  (type = 'shop_product')
-- Source: lib/shop-data.ts
-- ─────────────────────────────────────────────

insert into products (
  title, description, price, original_price, discount_percent,
  category, image_url, images, badge, is_new,
  artist, dimensions, shipping_status, sizes, slug, type, stock_quantity, is_active
) values

-- sp-1  Wall Decor
(
  'Pure Brass Mughlai Style Glass | 250 Ml | Set Of 4',
  'Handcrafted pure brass glasses in traditional Mughlai style, set of 4.',
  1700, 3400, 50, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'pure-brass-mughlai-style-glass-250ml-set-4', 'shop_product', 20, true
),

-- sp-2  Wall Decor
(
  'Handcrafted Pure Copper Glasses | 320 Ml | Set Of 2',
  'Handcrafted pure copper glasses, 320 ml, set of 2.',
  700, 1400, 50, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'handcrafted-pure-copper-glasses-320ml-set-2', 'shop_product', 15, true
),

-- sp-3  Wall Decor
(
  'Hammered Design Copper Steel Glass | 250 Ml | Set Of 6',
  'Hammered design copper steel glass, 250 ml, set of 6.',
  1700, 3400, 50, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'hammered-design-copper-steel-glass-250ml-set-6', 'shop_product', 12, true
),

-- sp-4  Wall Decor
(
  'Terracotta Water Bottle With Floral Painting',
  'Eco-friendly terracotta water bottle with hand-painted floral design.',
  420, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_797yu7797yu7797y%20%281%29.png',
  '{}', null, true, null, null, 'Ready to Ship',
  '{}', 'terracotta-water-bottle-floral-painting', 'shop_product', 30, true
),

-- sp-5  Wall Decor
(
  'Handmade Water Bottle',
  'Artisan handmade water bottle crafted with natural materials.',
  380, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_700uri700uri700u%20%281%29.png',
  '{}', null, true, null, null, 'Ready to Ship',
  '{}', 'handmade-water-bottle', 'shop_product', 25, true
),

-- sp-6  Wall Decor
(
  'Terracotta Water Bottle',
  'Classic terracotta water bottle, keeps water cool naturally.',
  350, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_p9qf5ip9qf5ip9qf%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'terracotta-water-bottle', 'shop_product', 40, true
),

-- sp-7  Wall Decor
(
  'Handmade Terracotta Mug Heat-Resistant',
  'Heat-resistant handmade terracotta mug for hot and cold beverages.',
  299, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_ljo2m6ljo2m6ljo2%20%281%29.png',
  '{}', null, true, null, null, 'Ready to Ship',
  '{}', 'handmade-terracotta-mug-heat-resistant', 'shop_product', 50, true
),

-- sp-8  Wall Decor
(
  'Handmade Mug Heat-Resistant',
  'Durable handmade heat-resistant mug, perfect for everyday use.',
  249, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_au7wv7au7wv7au7w%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'handmade-mug-heat-resistant', 'shop_product', 50, true
),

-- sp-9  Wall Decor
(
  'Traditional Brass Serving Bowl Set',
  'Traditional brass serving bowl set, beautifully crafted for festive occasions.',
  2200, 4400, 50, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_fznjfkfznjfkfznj%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'traditional-brass-serving-bowl-set', 'shop_product', 8, true
),

-- sp-10  Wall Decor
(
  'Copper Water Pitcher with Lid',
  'Elegant copper water pitcher with lid, keeps water pure and healthy.',
  1850, 2500, 26, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_tp6eqetp6eqetp6e%20%282%29%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'copper-water-pitcher-with-lid', 'shop_product', 10, true
),

-- sp-11  Wall Decor
(
  'Handwoven Cotton Place Mat Set of 6',
  'Set of 6 handwoven cotton place mats in natural earthy tones.',
  599, null, null, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_v79njrv79njrv79n_1%20%281%29.png',
  '{}', null, true, null, null, 'Ready to Ship',
  '{}', 'handwoven-cotton-place-mat-set-6', 'shop_product', 35, true
),

-- sp-12  Wall Decor
(
  'Embroidered Table Runner 72 inch',
  'Gorgeous embroidered table runner, 72 inches long, perfect for dining tables.',
  899, 1200, 25, 'Wall Decor',
  'https://wb8p483whar24efq.public.blob.vercel-storage.com/Gemini_Generated_Image_r29lxnr29lxnr29l%20%281%29.png',
  '{}', null, false, null, null, 'Ready to Ship',
  '{}', 'embroidered-table-runner-72-inch', 'shop_product', 18, true
);
