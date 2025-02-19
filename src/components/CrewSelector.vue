<template>
  <div class="container mx-auto p-1">
    <h2 class="font-bold text-xl mb-4">Select Users</h2>

    <!-- Selected Users Chips -->
    <div class="mb-4">
      <span
        v-for="(user, index) in selectedUsers"
        :key="user.id"
        class="bg-blue-500 text-black rounded-full px-4 py-1 mr-2 mb-2 inline-flex items-center"
      >
        {{ user.firstName }}
        <button @click="removeUser(index)" class="ml-2">&times;</button>
      </span>
    </div>

    <!-- Autocomplete Input -->
    <div class="relative">
      <input
        type="text"
        v-model="searchQuery"
        class="border p-2 rounded w-full text-black"
        placeholder="Search users..."
      />

      <!-- Autocomplete Suggestions -->
      <div
        v-if="searchQuery && filteredUsers.length"
        class="absolute border rounded mt-1 bg-white w-full z-10"
      >
        <div
          v-for="user in filteredUsers"
          :key="user.id"
          class="p-2 hover:bg-gray-200 text-black"
          @click="selectUser(user)"
        >
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'
import type { IUser } from '@/services/types'
import { users as MockUserData } from '@/services/mockData'
const tokenString = localStorage.getItem('token')
const { token } = JSON.parse(tokenString as string)

const users = ref<IUser[]>(
  MockUserData.filter((user) => {
    return user.companyId === token.companyId
  })
)

const selectedUsers = ref<IUser[]>([])
const emit = defineEmits(['update:selectedUsers'])
const searchQuery = ref('')

const filteredUsers = computed(() => {
  const lowerQuery = searchQuery.value.toLowerCase()
  return users.value.filter(
    (user) =>
      user.firstName.toLowerCase().includes(lowerQuery) ||
      user.lastName.toLowerCase().includes(lowerQuery) ||
      (user.email.toLowerCase().includes(lowerQuery) &&
        !selectedUsers.value.some((selectedUser) => selectedUser.id === user.id))
  )
})

const selectUser = (user: IUser) => {
  selectedUsers.value.push(user)
  searchQuery.value = ''
  emit('update:selectedUsers', selectedUsers.value)
}

const removeUser = (index: number) => {
  selectedUsers.value.splice(index, 1)
  emit('update:selectedUsers', selectedUsers.value)
}
</script>

<style>
/* Add any additional styling here */
</style>
