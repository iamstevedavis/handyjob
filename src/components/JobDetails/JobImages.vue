<template>
  <div class="container mx-auto p-2">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img :src="image.imageUrl" alt="Gallery Image" class="w-full" />
        <!-- You can add more content here like captions, etc. -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array<{ imageUrl: string }>,
    required: true
  }
})
</script>

<style>
/* Add any additional styling here */
</style>
