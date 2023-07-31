export default defineNuxtRouteMiddleware((to, from) => {
  const fullpath = to.fullPath.replace(/\/+$/, '') // Remove trailing slashes
  if (!fullpath.startsWith('/welcome') && to.name !== 'login')
    return navigateTo('/welcome/login')
})
