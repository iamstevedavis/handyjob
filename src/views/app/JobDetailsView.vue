<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <JobDetails v-if="jobDetails" :job="jobDetails" />
      <div v-else>No job details available.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobDetails from '@/components/JobDetails/JobDetails.vue'
import { fetchJobDetails } from '@/services/localStorage'
import type { IJob } from '@/services/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const jobId = route.params.id.toString()
const jobDetails = ref<IJob | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const result = fetchJobDetails(jobId)
    if (result) {
      jobDetails.value = result
      isLoading.value = false
    } else {
      console.error('Job details not found')
    }
  } catch (error) {
    console.error(error)
  }
})
</script>
