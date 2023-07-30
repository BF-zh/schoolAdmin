export function useGoTo() {
  const router = useRouter()
  // 跳转到登录页
  function goToLogin() {
    router.push('/wecome/login')
  }
  function goToRegister() {
    router.push('/wecome/register')
  }
  function goToForgot() {
    router.push('/wecome/forgot')
  }
  return {
    goToLogin,
    goToRegister,
    goToForgot,
  }
}
