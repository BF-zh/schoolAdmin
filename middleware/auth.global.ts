export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')
  if (to.params.id === '1')
    return abortNavigation()
  if (!to.path.toString().startsWith('/wecome') || to.path === '/wecome')
    return navigateTo('/wecome/login')
})
