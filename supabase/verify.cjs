const { Client } = require('pg')

const connectionString =
  'postgres://postgres.lcroguxscuqqgelqyopl:DzYGZB05WaVzkVCN@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'

async function run() {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } })
  await client.connect()

  const { rows: artworks } = await client.query(
    "SELECT id, title, price, category, type FROM products WHERE type = 'artwork' ORDER BY created_at"
  )
  console.log(`\n🖼  Artworks (${artworks.length}):`)
  artworks.forEach(r => console.log(`  • [${r.id.slice(0,8)}] ${r.title} — ₹${r.price}`))

  const { rows: shop } = await client.query(
    "SELECT id, title, price, category, type FROM products WHERE type = 'shop_product' ORDER BY created_at"
  )
  console.log(`\n🛒  Shop Products (${shop.length}):`)
  shop.forEach(r => console.log(`  • [${r.id.slice(0,8)}] ${r.title} — ₹${r.price}`))

  const { rows: cats } = await client.query('SELECT name, slug FROM categories ORDER BY sort_order')
  console.log(`\n📂  Categories (${cats.length}):`)
  cats.forEach(r => console.log(`  • ${r.name} (${r.slug})`))

  await client.end()
}

run().catch(e => { console.error(e); process.exit(1) })
