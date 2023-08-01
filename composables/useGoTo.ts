export function useGoTo() {
  const router = useRouter()
  // 跳转到登录页
  function goToLogin() {
    router.push('/welcome/login')
  }
  function goToRegister() {
    router.push('/welcome/register')
  }
  function goToForgot() {
    router.push('/welcome/forgot')
  }

  return {
    goToLogin,
    goToRegister,
    goToForgot,
  }
}
