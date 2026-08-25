<script setup>
import { ref, onMounted, nextTick } from 'vue'
import '@electric-sql/pglite-repl/webcomponent'
import { db, dbReady } from '../composables/db'

const replKey = ref(0)
const replEl = ref(null)

async function attachDb() {
  await nextTick()
  if (replEl.value) replEl.value.pg = db
}

onMounted(async () => {
  await dbReady
  await attachDb()
})

async function clearEditor() {
  replKey.value++       // remount ตัว repl → editor ว่างใหม่
  await attachDb()       // แปะ db ตัวเดิม (shared) กลับเข้าไป ไม่แตะข้อมูล
}
</script>

<template>
  <button @click="clearEditor">Clear</button>
  <div @keydown="e => e.stopPropagation()">
    <pglite-repl :key="replKey" ref="replEl"></pglite-repl>
  </div>
</template>