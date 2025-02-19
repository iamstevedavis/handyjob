<template>
  <router-link
    :to="{ name: 'jobDetails', params: { id: job.id } }"
    class="cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out flex justify-between gap-x-6 py-5"
  >
    <div class="flex min-w-0 gap-x-4">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="job.jobThumbnailImage?.imageUrl || 'https://picsum.photos/50'"
        alt=""
      />
      <div class="min-w-0 flex-auto">
        <p class="text-xl font-semibold leading-6 text-white-900">{{ job.title }}</p>
        <p class="mt-1 truncate text-s leading-5 text-slate-400">{{ job.details }}</p>
      </div>
    </div>
    <!-- Line below used to be <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end"> 
      but that hides the location and prevents highlight on mouseover
    -->
    <div class="sm:flex sm:flex-col sm:items-end">
      <p class="text-s leading-6 text-slate-400">{{ job.location }}</p>
      <!-- <p v-if="item.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
      Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
    </p>
    <div v-else class="mt-1 flex items-center gap-x-1.5">
      <div class="flex-none rounded-full bg-emerald-500/20 p-1">
        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </div>
      <p class="text-xs leading-5 text-gray-500">Online</p>
    </div> -->
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { IJob } from '@/services/types'
import type { PropType } from 'vue'

defineProps({
  job: {
    type: Object as PropType<IJob>,
    required: true
  }
})
</script>
