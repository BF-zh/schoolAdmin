<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface FormData {
  state: 'login' | 'register' | 'forgotPassword'// 登录|注册|忘记密码
  account: string// 账号-->可以为手机号和学生学号
  password: string// 密码
  email: string// 邮箱
  code: string// 验证码
  forgotPasswordStep: 0 | 1 | 2 | 3// 找回密码到第几个步骤
  loading: boolean
}

// 表单实例
const formRef = ref<FormInstance>()

/**
 * 初始化数据
 */
const formData = reactive<FormData>({
  account: '',
  email: '',
  password: '',
  code: '',
  state: 'login',
  forgotPasswordStep: 0,
  loading: false,
})

/**
 * 切换from 表单的类型
 * @param state 状态
 */
function changeState(state: ExtractField<FormData, 'state'>): void {
  formData.state = state
  resetForm(formRef.value)
  console.log(123);
  
}

/**
 * 重置表单
 */
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}
/**
 * 定义登录时表单的验证规则
 */
const loginFromRule = reactive<FormRules<FormData>>({
  account: [
    { required: true, trigger: 'blur', message: '账号不能为空' },
    { min: 6, trigger: 'blur', message: '账号格式不正确' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '密码不能为空' },
    { min: 5, max: 16, trigger: 'blur', message: '密码长度为5-16' },
  ],
})

/**
 * 定义注册时表单的验证规则
 */
const registerFromRule = reactive<FormRules<FormData>>({
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
 * 计算属性 更具不同的状态选这不同的验证规则
 */
const fromRule = computed(() => {
  if (formData.state === 'login')
    return loginFromRule
  if (formData.state === 'register')
    return registerFromRule
})

/**
 * 处理表达提交的事件
 * @param formEl 表单的示例对象
 */
function handleSubmit(formEl: FormInstance) {
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
  <div h-full flex="~ justify-center items-center">
    <el-form ref="formRef" :rules="fromRule" :model="formData" rounded-xl bg-white p-2xl text-xs sm="text-sm">
      <div v-if="formData.state === 'login'" grid="~ cols-1 gap-x-sm xl:cols-2">
        <div xl:min-w-xs>
          <div h-2em text-xl font-semibold lh-2em>
            用户登录
          </div>
          <el-form-item prop="account">
            <el-input v-model="formData.account" clearable placeholder="账号 (学号/邮箱)" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formData.password" type="password" show-password
              placeholder="密码"
            />
          </el-form-item>
          <el-button round my-sm w-full type="primary" @click="handleSubmit(formRef)">
            登录
          </el-button>
          <div flex justify-between>
            <el-button type="primary" link @click="changeState('register')">
              注册账号
            </el-button>
            <el-button type="primary" link @click="changeState('forgotPassword')">
              忘记密码
            </el-button>
          </div>
          <el-divider>
            <span text-xs sm="text-sm">其他方式登录</span>
          </el-divider>
          <div flex="~ gap-10" text="xl" items-center justify-between>
            <i title="Github登录" i-carbon:logo-github bg="black" />
            <i title="微信登录" i-carbon:logo-wechat bg="#24b76a" />
            <i title="QQ登录" i-carbon:logo-quora bg="#1296db" />
          </div>
        </div>
        <div xl="flex" flex="justify-center items-center col" hidden text-center>
          <div m-b-xs>
            扫码登录
          </div>
          <div w="3/5" aspect-ratio-1 border="1 solid gray" />
          <div text="gray xs" m="y-sm">
            使用北风课堂APP扫码登录
          </div>
        </div>
      </div>
      <div v-if="formData.state === 'register'" xl:min-w-xs>
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
        <el-button round my-sm w-full type="primary">
          注册
        </el-button>
        <div flex justify-center>
          已有账号，
          <el-button type="primary" link @click="changeState('login')">
            立即登录
          </el-button>
        </div>
      </div>
      <div v-if="formData.state === 'forgotPassword'" xl:min-w-xs>
        <el-steps :active="formData.forgotPasswordStep" finish-status="success" align-center>
          <el-step title="填写信息" />
          <el-step title="验证邮箱" />
          <el-step title="修改密码" />
          <el-step title="修改成功" />
        </el-steps>
        <el-form-item>
          <el-input v-model="formData.account" placeholder="请输入邮箱" />
        </el-form-item>
        <div text-center>
          <el-button type="primary" :loading="false">
            下一步
          </el-button>
        </div>
      </div>
    </el-form>
    <div text="xs center" m-t-sm>
      登录即表示同意平台 <nuxt-link c-primary to="/">
        《隐私政策》
      </nuxt-link>和 <nuxt-link c-primary to="/">
        《用户协议》
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
