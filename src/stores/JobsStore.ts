import type { IJob } from '@/services/types'
import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [] as IJob[]
  }),
  actions: {
    setJobs(jobs: IJob[]) {
      this.jobs = jobs
    }
    // updateJob(jobId: UUID, additionalData: Partial<IJob>) {
    //   const jobToUpdate = this.jobs.find((job) => job.id === jobId)
    //   if (jobToUpdate) {
    //     // Merge the existing job data with the additionalData
    //     Object.assign(jobToUpdate, additionalData)
    //   }
    // },
    // getJobDetails(jobId: UUID): IJob | undefined {
    //   console.log('getJobDetails', jobId, this.jobs)
    //   const jobData = this.jobs.find((item) => item.id === jobId.toString())
    //   if (!jobData) {
    //     return
    //   }
    //   const jobDetailsData = jobDetails.find((item) => item.jobId === jobId.toString())
    //   const data: IJob = {
    //     id: jobData.id, // Assuming a default value for 'id' if not found
    //     title: jobData?.title || '',
    //     details: jobData?.details || '',
    //     location: jobData?.location || undefined,
    //     startDateTime: jobData?.startDateTime || undefined,
    //     jobThumbnailImage: jobData?.jobThumbnailImage || undefined,
    //     gear: jobDetailsData?.gear || [],
    //     companyId: jobData.companyId,
    //     jobImages: jobDetailsData?.jobImages || [],
    //     jobCrew: jobDetailsData?.jobCrew || []
    //   }
    //   return data
    // },
    // addJob(newJob: IJob) {
    //   // Push the new job to the 'jobs' array
    //   this.jobs.push(newJob)
    // }
  }
})
