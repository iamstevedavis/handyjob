import { useJobsStore } from '@/stores/JobsStore'
import type { IJob } from './types'

export const seedPinia = () => {
  const store = useJobsStore()

  // Attempt to retrieve data from localStorage
  const storedData = localStorage.getItem('localStorageKey')

  if (storedData) {
    // If data is found in localStorage, parse and set it in the store
    const jobs = JSON.parse(storedData) as IJob[]
    store.setJobs(jobs)
  }
}
