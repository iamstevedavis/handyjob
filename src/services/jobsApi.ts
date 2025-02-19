import type { IJob } from './types'

export const fetchJobDetails = async (jobId: string): Promise<IJob> => {
  if (!jobId) {
    throw new Error('JobId is required to get job details.')
  }
  // Simulate a delay, similar to a real network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const userToken = localStorage.getItem('token')

  const headers = new Headers()
  if (userToken) {
    headers.append('Authorization', `Bearer ${userToken}`)
  }

  const response = await fetch(`your_api_url_here/${jobId}`, { headers })

  if (response.ok) {
    const data = await response.json()

    return data
  } else {
    throw Error('Failed to fetch job list')
  }
}

export const fetchJobsList = async () => {
  // Simulate a delay, similar to a real network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const userToken = localStorage.getItem('token')

  const headers = new Headers()
  if (userToken) {
    headers.append('Authorization', `Bearer ${userToken}`)
  }

  const response = await fetch('your_api_url_here', { headers })

  try {
    if (response.ok) {
      const data = await response.json()

      return data
    } else {
      throw new Error('Failed to fetch job list')
    }
  } catch (error) {
    console.error('Error fetching job list:', error)
    throw error
  }
}
