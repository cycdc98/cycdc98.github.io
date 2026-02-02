<template>
  <el-container class="container">
    <div v-for="item in items">
      <el-button @click="toPath(item.path)">{{ item.title }}</el-button>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress'
const router = useRouter()
const items = [
  { title: 'example', path: '/examples/markdown-examples' },
  { title: 'jenkins', path: '/jenkins/' },
  { title: '摄影', path: '/photography/' },
]

const toPath = (path: string) => {
  router.go(path)
}
</script>

<style scoped>
.container {
  gap: 10px;
}
</style>