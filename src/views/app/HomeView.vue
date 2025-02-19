<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <JobList :jobs="jobs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import JobList from '@/components/JobList/JobList.vue'
import type { IJob } from '@/services/types'
import { onMounted, ref } from 'vue'

const j: string = localStorage.getItem('jobs') || ''
const jobs: IJob[] = JSON.parse(j)
const isLoading = ref(false)

onMounted(() => {})
</script>
