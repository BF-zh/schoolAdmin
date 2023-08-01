export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path.replace(/\/+$/, '') // Remove trailing slashes
  if (path !== '/welcome/login' && !path.startsWith('/welcome'))
    return navigateTo('/welcome/login')
})
