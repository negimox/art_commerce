const { Client } = require('pg')
const fs = require('fs')
const path = require('path')

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

if (!connectionString) {
  console.error('❌ Error: DATABASE_URL or POSTGRES_URL environment variable is required.')
  process.exit(1)
}

async function run() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()
  console.log('✅ Connected to Supabase Postgres')

  let hasError = false
  const files = process.argv.slice(2)
  for (const file of files) {
    const sql = fs.readFileSync(path.resolve(file), 'utf8')
    console.log(`\n▶  Running: ${file}`)
    try {
      await client.query(sql)
      console.log(`✅ Done: ${file}`)
    } catch (err) {
      hasError = true
      console.error(`❌ Error in ${file}:`, err.message)
      // Print the failing detail if available
      if (err.detail) console.error('   Detail:', err.detail)
      if (err.hint)   console.error('   Hint  :', err.hint)
    }
  }

  await client.end()

  if (hasError) {
    console.error('\n❌ Finished with errors.')
    process.exit(1)
  }

  console.log('\n🏁 Finished.')
}

run().catch(err => {
  console.error('Fatal:', err.message)
  process.exit(1)
})
