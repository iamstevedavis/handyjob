<template>
  <div class="container mx-auto p-4">
    <!-- Section Heading -->
    <h2 class="font-bold text-xl mb-4">Job Gear</h2>

    <!-- Gear Items Container -->
    <div class="">
      <div v-for="(item, index) in gear" :key="index" class="flex flex-col gap-2 pt-1 pb-1">
        <!-- Gear Name and Quantity -->
        <div>
          <span class="font-semibold">{{ item.name }}:</span>
          <span>{{ item.quantity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IJobGear } from '@/services/types'

const props = defineProps({
  gear: {
    type: Array<IJobGear>,
    required: true
  }
})
</script>

<style>
/* Additional styling if needed */
</style>
