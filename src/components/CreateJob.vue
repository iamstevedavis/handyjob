<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div>
    <div class="space-y-12">
      <div class="border-b border-white-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-white-900">Create New Job</h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="username" class="block text-sm font-medium leading-6 text-white-900"
              >Job Name</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-white-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <input
                  type="text"
                  name="jobName"
                  id="jobName"
                  v-model="jobName"
                  autocomplete="jobName"
                  class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Blow"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="username" class="block text-sm font-medium leading-6 text-white-900"
              >Job Location</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-white-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <input
                  type="text"
                  name="jobLocation"
                  id="jobLocation"
                  v-model="jobLocation"
                  autocomplete="jobLocation"
                  class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="123 Fake St."
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="username" class="block text-sm font-medium leading-6 text-white-900"
              >Job Start</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-white-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <Datepicker id="jobStart" v-model="jobStartDate" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="username" class="block text-sm font-medium leading-6 text-white-900"
              >Job End</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-white-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <Datepicker id="jobEnd" v-model="jobEndDate" />
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <label for="jobDetails" class="block text-sm font-medium leading-6 text-white-900"
              >Details</label
            >
            <div class="mt-2">
              <textarea
                id="jobDetails"
                name="jobDetails"
                v-model="jobDetails"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-white-600">
              Any relevant details you think are worth keeping in mind about this job.
            </p>
          </div>
          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-white-900"
              >Job Photots</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10"
            >
              <div class="text-center">
                <svg
                  class="mx-auto h-12 w-12 text-white-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-white-600">
                  <label
                    for="jobPhotos"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="jobPhotos"
                      v-on:change="handleJobPhotoUpload"
                      name="jobPhotos"
                      type="file"
                      class="sr-only"
                      multiple
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-white-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-white-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-white-900">Job Contact</h2>
        <p class="mt-1 text-sm leading-6 text-white-600">Primary contact for this job.</p>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="jobContactFirstName"
              class="block text-sm font-medium leading-6 text-white-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="jobContactFirstName"
                id="jobContactFirstName"
                v-model="jobContactFirstName"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="jobContactLastName"
              class="block text-sm font-medium leading-6 text-white-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="jobContactLastName"
                id="jobContactLastName"
                v-model="jobContactLastName"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="jobContactEmail" class="block text-sm font-medium leading-6 text-white-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="jobContactEmail"
                name="jobContactEmail"
                type="text"
                v-model="jobContactEmail"
                autocomplete="jobContactEmail"
                class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 placeholder:slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="jobContactPhone" class="block text-sm font-medium leading-6 text-white-900"
              >Phone</label
            >
            <div class="mt-2">
              <input
                id="jobContactPhone"
                name="jobContactPhone"
                type="phone"
                v-model="jobContactPhone"
                autocomplete="phone"
                class="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-white-900/10 pb-12">
      <div class="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
        <label class="block text-sm font-medium leading-6 text-white-900">Gear Name</label>
        <label class="block text-sm font-medium leading-6 text-white-900">Quantity</label>
        <label class="block text-sm font-medium leading-6 text-white-900">Remove</label>
      </div>
      <ul role="list" class="">
        <li v-for="(gear, index) in jobGear" :key="index" class="py-1">
          <div class="grid grid-cols-3 gap-x-6">
            <label class="block text-sm font-medium leading-6 text-white-900">{{
              gear.name
            }}</label>
            <label class="block text-sm font-medium leading-6 text-white-900">{{
              gear.quantity
            }}</label>
            <button
              class="rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="removeGear(index)"
            >
              Remove Gear
            </button>
          </div>
        </li>
      </ul>
      <div class="mt-2 grid grid-cols-3 gap-x-6 py-8">
        <input
          type="text"
          name="newGearName"
          id="newGearName"
          v-model="newGearName"
          autocomplete="newGearName"
          class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 text-slate-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Gear Name"
        />
        <input
          type="number"
          name="newGearQuantity"
          id="newGearQuantity"
          v-model="newGearQuantity"
          autocomplete="newGearQuantity"
          class="block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-white-300 text-slate-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Gear Quantity"
        />
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="addGear"
        >
          Add Gear
        </button>
      </div>
      <CrewSelector @update:selectedUsers="handleSelectedUsers" />
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-white-900">Cancel</button>
      <button
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="saveData"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createJob } from '@/services/localStorage'
import type { IJob, IUser } from '@/services/types'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
import CrewSelector from './CrewSelector.vue'
import { v4 as uuidv4 } from 'uuid'

const jobName = ref<string>('')
const jobLocation = ref<string>('')
const jobStartDate = ref<Date | null>(null)
const jobEndDate = ref<Date | null>(null)
const jobDetails = ref<string>('')
// const jobPhotos = ref<string>('')
const jobContactFirstName = ref<string>('')
const jobContactLastName = ref<string>('')
const jobContactEmail = ref<string>('')
const jobContactPhone = ref<string>('')
const newGearName = ref<string>('')
const newGearQuantity = ref<number>(1)
const jobGear = ref<Array<{ name: string; quantity: number }>>([])
const fileList: Array<{
  imageUrl: string
}> = []
const selectedJobPhotos = ref<FileList | null>(null)
let jobCrew: IUser[] = []

const handleJobPhotoUpload = (event: Event) => {
  const input = event.target as HTMLInputElement

  if (input.files) {
    selectedJobPhotos.value = input.files
  }
}

const tokenString = localStorage.getItem('token')
const tokenObject = JSON.parse(tokenString as string)
const saveData = async () => {
  await uploadFiles()
  const newJob: IJob = {
    id: uuidv4(),
    title: jobName.value,
    details: jobDetails.value,
    location: jobLocation.value,
    startDateTime: jobStartDate.value?.toDateString(),
    endDateTime: jobEndDate.value?.toDateString(),
    companyId: tokenObject.companyId,
    jobContacts: [
      {
        firstName: jobContactFirstName.value,
        lastName: jobContactLastName.value,
        email: jobContactEmail.value,
        phone: jobContactPhone.value
      }
    ],
    jobImages: fileList,
    gear: jobGear.value.filter((item) => item !== undefined),
    jobCrew: jobCrew.map((crew) => crew.id)
  }

  await createJob(newJob)
}

const uploadFiles = async () => {
  if (selectedJobPhotos.value) {
    const formData = new FormData()
    // TypeScript should now understand that selectedJobPhotos.value is a FileList
    for (let i = 0; i < selectedJobPhotos.value.length; i++) {
      formData.append('files', selectedJobPhotos.value[i])
      fileList.push({ imageUrl: selectedJobPhotos.value[i].name })
    }

    // for (let i = 0; i < selectedJobPhotos.value.length; i++) {
    //   formData.append(`files[${i}]`, selectedJobPhotos.value[i])
    // }

    try {
      // Now that you are using async, you can uncomment and use the await keyword
      // const response = await axios.post('/upload', formData);
      // console.log('Upload response:', response.data);
      // Handle the server's response as needed
    } catch (error) {
      console.error('Upload error:', error)
      // Handle any errors
    }
  }
}

const addGear = async () => {
  if (newGearName.value !== '') {
    jobGear.value.push({
      name: newGearName.value,
      quantity: newGearQuantity.value
    })
  }
}

const removeGear = async (index: number) => {
  jobGear.value.splice(index, 1)
}

const handleSelectedUsers = (selectedUsers: IUser[]) => {
  // Do something with selectedUsers in the parent component
  jobCrew = selectedUsers
}
</script>
