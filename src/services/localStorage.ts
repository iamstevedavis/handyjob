import { jobs, users } from '@/services/mockData'
import type { IJob, IUser } from './types'

export const fetchJobDetails = (jobId: string): IJob | undefined => {
  if (!jobId) {
    throw new Error('JobId is required to get job details.')
  }
  const jobsJSON = localStorage.getItem('jobs')
  if (!jobsJSON || jobsJSON === '') return undefined
  const jobs = JSON.parse(jobsJSON)
  return jobs.find((job: IJob) => {
    return job.id === jobId
  })

  // const jobIdString = String(jobId)
  // const jobData = jobs.find((item) => item && String(item.id) === jobIdString)

  // return jobData || undefined // Provide a default value of undefined
}

export const seedData = () => {
  const serializedJobs = JSON.stringify(jobs)
  localStorage.setItem('jobs', serializedJobs)

  const associativeUsersObject: { [key: string]: IUser } = {} // Use an object instead of an array

  for (const user of users) {
    associativeUsersObject[user.id] = user
  }

  const serializedUsers = JSON.stringify(associativeUsersObject)
  localStorage.setItem('users', serializedUsers) // Update the key to 'users'
}

export const fetchJobsList = async () => {
  const data = jobs
  const serializedData = JSON.stringify(jobs)

  for (const job of jobs) {
    if (job) {
      const currentJobData = localStorage.getItem(job.id)
      if (!currentJobData) {
        localStorage.setItem(job.id, serializedData)
      }
    }
  }

  return data
}

export const createJob = async (job: IJob) => {
  const j: string = localStorage.getItem('jobs') || ''
  const localStorageJobs: IJob[] = JSON.parse(j)
  localStorageJobs.push(job) // Use jobIdString here as well
  localStorage.setItem('jobs', JSON.stringify(localStorageJobs))
}
