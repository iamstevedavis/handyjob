<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSignOut = () => {
  localStorage.setItem('token', '')
  localStorage.setItem('jobs', '')
  router.push('/')
}
onMounted(() => {
  handleSignOut()
})
</script>
