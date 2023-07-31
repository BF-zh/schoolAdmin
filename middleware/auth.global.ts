export default defineNuxtRouteMiddleware((to, from) => {
  const fullpath = to.fullPath.replace(/\/+$/, '') // 删除路径最后的 /
  if (!fullpath.startsWith('/welcome') && to.name !== 'login')
    return navigateTo('/welcome/login')
})
