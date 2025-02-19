import CreateJob from '@/views/app/CreateJobView.vue'
import HomeView from '@/views/app/HomeView.vue'
import JobsCalendarView from '@/views/app/JobsCalendarView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/views/app/MainLayout.vue'
import TeamView from '@/views/app/TeamView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppSignout from '../components/AppSignout.vue'
import JobDetailsView from '../views/app/JobDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signout',
      name: 'signout',
      component: AppSignout
    },
    {
      path: '/home',
      name: 'home',
      component: MainLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: '/home', name: 'home', component: HomeView },
        { path: '/job/:id', name: 'jobDetails', component: JobDetailsView },
        { path: '/calendar', name: 'jobsCalendar', component: JobsCalendarView },
        { path: '/create', name: 'createJob', component: CreateJob },
        { path: '/team', name: 'team', component: TeamView }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  console.log(`Checking auth for route ${to.path}`)

  if (to.meta.requiresAuth) {
    console.log('Route requires auth')
    if (token) {
      console.log('Authenticated')
      next()
    } else {
      console.log('Unauthenticated')
      next('/')
    }
  } else if (to.path === '/') {
    console.log('Route does not require auth')
    if (token) {
      console.log('Found token')
      next('/home')
    } else {
      console.log('No token')
      next()
    }
  } else {
    console.log('No Auth Needed')
    next()
  }
})

export default router
