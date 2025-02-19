<template>
  <div>
    <LoginForm @login="login" :email="email" :password="password" />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import { seedData } from '@/services/localStorage'
import { fetchLogin } from '@/services/loginApi'

import type { ILoginCredentials } from '@/services/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async (credentials: ILoginCredentials) => {
  try {
    const response = await fetchLogin(credentials)

    if (response.success) {
      const tokenObject = {
        token: response.token
      }
      const tokenString = JSON.stringify(tokenObject)

      localStorage.setItem('token', tokenString)
      seedData()

      router.push('/home')
    } else {
      console.error('Login failed:', response.error)
    }
  } catch (error) {
    console.error('Error logging in:', error)
  }
}
</script>
