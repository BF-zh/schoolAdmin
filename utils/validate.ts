/**
 * 验证密码强度
 * @param password 密码
 * @returns 强度是否合适
 */
export function validatePassword(password: string): boolean {
  return false
}

/**
 * 判断当前字符串是否为一个邮箱
 * @param email 邮箱
 * @returns 是否为一个邮箱
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}
