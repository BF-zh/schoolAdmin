export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path.replace(/\/+$/, '') // Remove trailing slashes
  if (to.name !== 'login' && !path.startsWith('/welcome'))
    return navigateTo('/welcome/login')
})
