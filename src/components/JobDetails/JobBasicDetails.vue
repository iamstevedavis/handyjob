<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-col gap-4">
      <!-- Job Name -->
      <div>
        <h2 class="font-bold text-lg">Job Name</h2>
        <p>{{ job.title }}</p>
      </div>

      <!-- Date Time and Location -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 class="font-bold text-lg">Date & Time</h2>
          <p>{{ job.startDateTime }}</p>
        </div>
        <div>
          <h2 class="font-bold text-lg">Location</h2>
          <p>{{ job.location }}</p>
        </div>
      </div>

      <!-- Job Details -->
      <div>
        <h2 class="font-bold text-lg">Job Details</h2>
        <p>{{ job.details }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IJob } from '@/services/types'
import type { PropType } from 'vue'

const props = defineProps({
  job: {
    type: Object as PropType<IJob>,
    required: true
  }
})
</script>

<style>
/* Additional styling if needed */
</style>
