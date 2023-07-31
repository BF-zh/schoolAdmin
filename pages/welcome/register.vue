<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const { goToLogin } = useGoTo()
interface FormData {
  password: string// 密码
  email: string// 邮箱
  code: string// 验证码
}

// 表单实例
const formRef = ref<FormInstance>()

/**
 * 初始化数据
 */
const formData = reactive<FormData>({
  email: '',
  password: '',
  code: '',
})

/**
 * 定义注册时表单的验证规则
 */
const rules = reactive<FormRules<FormData>>({
  email: [
    { required: true, trigger: 'blur', message: '邮箱不能为空' },
    { min: 6, trigger: 'blur', type: 'email', message: '邮箱格式正确' },
  ],
  password: [
    { min: 5, max: 16, trigger: 'blur', message: '密码长度为5-16' },
    { required: true, trigger: 'blur', message: '密码不能为空' },
  ],
  code: [
    { min: 5, max: 5, type: 'number', trigger: 'blur', message: '验证码格式不正确' },
    { required: true, trigger: 'blur', message: '验证码不能为空' },
  ],
})
/**
 * 处理表达提交的事件
 * @param formEl 表单的示例对象
 */
function handleSubmit(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <el-form ref="formRef" :rules="rules" :model="formData">
    <div min-w-xs>
      <div h-2em text-xl font-semibold lh-2em>
        注册账号
      </div>
      <el-form-item prop="email">
        <el-input v-model="formData.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item prop="code">
        <div w-full flex justify-between gap-x-sm>
          <el-input v-model="formData.code" placeholder="请输入验证码" />
          <el-button>获取验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码" />
      </el-form-item>
      <el-button round my-sm w-full type="primary" @click="handleSubmit(formRef)">
        注册
      </el-button>
      <div flex justify-center>
        已有账号，
        <el-button type="primary" link @click="goToLogin">
          立即登录
        </el-button>
      </div>
    </div>
  </el-form>
</template>

<style scoped lang="scss">

</style>
