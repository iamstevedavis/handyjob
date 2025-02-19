<template>
  <div id="calendar">
    <h1>Jobs Calendar</h1>
    <CalendarView
      :show-date="showDate"
      class="theme-default holiday-us-traditional holiday-us-official"
      :items="items"
      @click-item="handleItemClick"
    >
      <template #header="{ headerProps }">
        <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
      </template>
    </CalendarView>
  </div>
</template>

<script setup lang="ts">
import type { ICalendarItem, IJob } from '@/services/types'
import type { PropType } from 'vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'

import '../../node_modules/vue-simple-calendar/dist/css/default.css'
import '../../node_modules/vue-simple-calendar/dist/css/holidays-us.css'
import '../../node_modules/vue-simple-calendar/dist/style.css'

const router = useRouter()
const { jobs } = defineProps({
  jobs: {
    type: Object as PropType<IJob[]>,
    required: true
  }
})

const showDate = ref(new Date())
const items = reactive<ICalendarItem[]>([])

const setShowDate = (d: Date) => {
  showDate.value = d
}

const handleItemClick = (item: ICalendarItem) => {
  if (item.id) {
    router.push({ name: 'jobDetails', params: { id: item.id } })
  }
}

jobs.forEach((job) => {
  if (job.startDateTime) {
    items.push({
      id: job.id.toString(),
      title: job.title,
      startDate: new Date(job.startDateTime),
      endDate: new Date(job.endDateTime || job.startDateTime),
      url: router.resolve({ name: 'jobDetails', params: { id: job.id } }).href
    })
  }
})
</script>

<style scoped>
#calendar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  background-color: #ffffff;
}
</style>
