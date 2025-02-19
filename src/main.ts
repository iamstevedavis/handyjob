import './assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives
})

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.component('VueDatePicker', VueDatePicker)
app.mount('#app')
