<template>
  <div class="container mx-auto p-4">
    <h2 class="font-bold text-xl mb-4">Job Contacts</h2>

    <div class="space-y-4">
      <div v-for="(contact, index) in jobContacts" :key="index" class="border p-4 rounded-lg">
        <div class="font-bold">{{ contact.firstName }} {{ contact.lastName }}</div>
        <div>
          Email: <a href="mailto:{{ contact.email }}" class="text-blue-500">{{ contact.email }}</a>
        </div>
        <div>
          Phone: <a href="tel:{{ contact.phone }}" class="text-blue-500">{{ contact.phone }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IJobContact } from '@/services/types'

const props = defineProps({
  jobContacts: {
    type: Array<IJobContact>,
    required: true
  }
})
</script>

<style>
/* Additional styling if needed */
</style>
