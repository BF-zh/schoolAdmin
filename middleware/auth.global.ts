export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path.replace(/\/+$/, '') // Remove trailing slashes
  console.log(path);
  
  if(path === '/welcome/login' )
    return
  if (!path.startsWith('/welcome'))
    return navigateTo('/welcome/login')
})
