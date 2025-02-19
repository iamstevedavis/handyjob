<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="job in jobs" :key="job.id" class="">
      <JobListItem :job="job" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import JobListItem from './JobListItem.vue'
import type { IJob } from '@/services/types'

defineProps({
  jobs: Array as () => IJob[]
})
</script>
