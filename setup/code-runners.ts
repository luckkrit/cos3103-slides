import { defineCodeRunnersSetup } from '@slidev/types'
import type { PGlite } from '@electric-sql/pglite'

function resultsToHtml(result: { rows: Record<string, unknown>[] }) {
  if (!result || !result.rows || result.rows.length === 0) {
    return `<div style="color:#888;padding:4px 8px;font-size:0.85em">OK — no rows to show</div>`
  }
  const cols = Object.keys(result.rows[0])
  const th = cols
    .map(c => `<th style="border:1px solid #ccc;padding:4px 10px;background:#f0f0f0;text-align:left">${c}</th>`)
    .join('')
  const trs = result.rows
    .map(row =>
      `<tr>${cols
        .map(c => `<td style="border:1px solid #ccc;padding:4px 10px">${row[c] ?? 'NULL'}</td>`)
        .join('')}</tr>`
    )
    .join('')
  return `<table style="border-collapse:collapse;font-size:0.85em;color:#111;background:#fff">
    <thead><tr>${th}</tr></thead>
    <tbody>${trs}</tbody>
  </table>`
}

interface DbModule {
  db: PGlite
  dbReady: Promise<unknown>
}
const modules = import.meta.glob<DbModule>('../composables/dbs/*.ts', { eager: true })

const dbMap: Record<string, { db: PGlite; ready: Promise<unknown> }> = {}
for (const path in modules) {
  const key = path.match(/\/dbs\/(.+)\.ts$/)?.[1]
  if (key) {
    dbMap[key] = { db: modules[path].db, ready: modules[path].dbReady }
  }
}

// ── ดึง db key จากคอมเมนต์บรรทัดแรกของ SQL แทน ctx.options ──
function extractDbKey(code: string): { key: string; sql: string } {
  const match = code.match(/^\s*--\s*db:\s*([\w-]+)\s*\n/)
  if (match) {
    return { key: match[1], sql: code.slice(match[0].length) }
  }
  return { key: 'classic', sql: code }
}
// ─────────────────────────────────────────────────────────

export default defineCodeRunnersSetup(() => {
  return {
    async sql(code) {
      const { key, sql } = extractDbKey(code)
      const entry = dbMap[key]

      if (!entry) {
        return {
          html: `<div style="color:#c00;padding:8px;font-family:monospace">Unknown db: "${key}" — มีให้เลือก: ${Object.keys(dbMap).join(', ')}</div>`,
        }
      }

      try {
        await entry.ready
        const results = await entry.db.exec(sql)
        const last = results[results.length - 1]
        return { html: resultsToHtml(last) }
      } catch (err) {
        return {
          html: `<div style="color:#c00;padding:8px;font-family:monospace">${(err as Error).message}</div>`,
        }
      }
    },
  }
})