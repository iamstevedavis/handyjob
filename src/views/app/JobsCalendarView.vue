<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <JobsCalendar :jobs="jobs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import JobsCalendar from '@/components/JobsCalendar.vue'
import type { IJob } from '@/services/types'
import { ref } from 'vue'

const j: string = localStorage.getItem('jobs') || ''
const jobs: IJob[] = JSON.parse(j)
const isLoading = ref(false)
</script>
