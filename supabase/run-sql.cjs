const { Client } = require('pg')
const fs = require('fs')
const path = require('path')

const connectionString =
  'postgres://postgres.lcroguxscuqqgelqyopl:DzYGZB05WaVzkVCN@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'

async function run() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()
  console.log('✅ Connected to Supabase Postgres')

  const files = process.argv.slice(2)
  for (const file of files) {
    const sql = fs.readFileSync(path.resolve(file), 'utf8')
    console.log(`\n▶  Running: ${file}`)
    try {
      await client.query(sql)
      console.log(`✅ Done: ${file}`)
    } catch (err) {
      console.error(`❌ Error in ${file}:`, err.message)
      // Print the failing detail if available
      if (err.detail) console.error('   Detail:', err.detail)
      if (err.hint)   console.error('   Hint  :', err.hint)
    }
  }

  await client.end()
  console.log('\n🏁 Finished.')
}

run().catch(err => {
  console.error('Fatal:', err.message)
  process.exit(1)
})
