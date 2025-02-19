<template>
  <div class="container mx-auto p-4">
    <h2 class="font-bold text-xl mb-4">Job Crew</h2>

    <div class="space-y-4">
      <div v-for="(member, index) in jobCrew" :key="index" class="flex items-center">
        <!-- Profile Picture -->
        <img
          :src="member.profileUrl"
          alt="Profile picture of crew member"
          class="h-10 w-10 rounded-full mr-4"
        />

        <!-- Name -->
        <div>{{ member.firstName }} {{ member.lastName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '@/services/types'

const props = defineProps({
  jobCrew: {
    type: Array<IUser>,
    required: true
  }
})
</script>

<style>
/* Additional styling if needed */
</style>
