import { PGlite } from '@electric-sql/pglite'

export const db = new PGlite()
export const dbReady = db.waitReady   // แค่รอ WASM boot เสร็จ ไม่มี schema ผูกมาด้วย