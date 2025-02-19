import { users } from '@/services/mockData'
import type { ILoginCredentials } from './types'

// Function to mock login
export async function fetchLogin(credentials: ILoginCredentials) {
  const user = users.find((u) => u.email === credentials.email)

  if (user) {
    // Successful login
    return {
      success: true,
      token: {
        ...user
      }
    }
  } else {
    // Failed login
    return {
      success: false,
      error: 'Invalid email or password'
    }
  }
}
