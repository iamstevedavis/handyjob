<template>
  <div class="">
    <JobImages v-if="job.jobImages" :images="job.jobImages" />
    <JobBasicDetails :job="job" />
    <JobGear v-if="job.gear" :gear="job.gear" />
    <JobContacts v-if="job.jobContacts" :jobContacts="job.jobContacts" />
    <JobCrew v-if="jobCrew" :jobCrew="jobCrew" />
  </div>
</template>

<script setup lang="ts">
import JobBasicDetails from '@/components/JobDetails/JobBasicDetails.vue'
import JobGear from '@/components/JobDetails/JobGear.vue'
import JobImages from '@/components/JobDetails/JobImages.vue'
import JobContacts from '@/components/JobDetails/JobContacts.vue'
import JobCrew from '@/components/JobDetails/JobCrew.vue'
import type { IJob, IUser } from '@/services/types'
import type { PropType } from 'vue'

const usersString = localStorage.getItem('users')
const users = usersString ? JSON.parse(usersString) : []

const props = defineProps({
  job: {
    type: Object as PropType<IJob>,
    required: true
  }
})

const jobCrewIds = props.job.jobCrew || []
const jobCrew: IUser[] = []
for (const id of jobCrewIds) {
  jobCrew.push(users[id])
}
</script>
