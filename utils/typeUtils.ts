// 提取对象中的参数
type ExtractField<T, K extends keyof T> = K extends keyof T ? T[K] : never
