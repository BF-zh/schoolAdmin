export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path.replace(/^\/+/, '') // Remove leading slashes
  if (!path.startsWith('/wecome') || to.name !== 'login')
    return navigateTo('/wecome/login')
})
