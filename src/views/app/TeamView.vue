<template>
  <div>Teams View</div>
</template>

<script setup lang="ts">
import type { IJob } from '@/services/types'
import { onMounted, ref } from 'vue'

const j: string = localStorage.getItem('jobs') || ''
const jobs: IJob[] = JSON.parse(j)
const isLoading = ref(false)

onMounted(() => {})
</script>
