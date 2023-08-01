<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const { goToRegister, goToForgot } = useGoTo()
interface FormData {
  account: string// 账号-->可以为手机号和学生学号
  password: string// 密码
}

// 表单实例
const formRef = ref<FormInstance>()

/**
 * 初始化数据
 */
const formData = reactive<FormData>({
  account: '',
  password: '',
})

/**
 * 定义登录时表单的验证规则
 */
const rules = reactive<FormRules<FormData>>({
  account: [
    { required: true, trigger: 'blur', message: '账号不能为空' },
    { min: 6, trigger: 'blur', message: '账号格式不正确' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '密码不能为空' },
    { min: 5, max: 16, trigger: 'blur', message: '密码长度为5-16' },
  ],
})
const router = useRouter()
/**
 * 处理表达提交的事件
 * @param formEl 表单的示例对象
 */
function handleSubmit(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      useFetch('/api/user/update', {
        body: { ...formData },
        method: 'POST',
      })
    }
    else {
      console.log('error submit!')
      return false
    }
  })
}
console.log('i love you')
</script>

<template>
  <el-form ref="formRef" :rules="rules" :model="formData" flex="~">
    <div min-w-xs>
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
        <el-button type="primary" link @click="goToRegister">
          注册账号
        </el-button>
        <el-button type="primary" link @click="goToForgot">
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
    <div xl="flex w-xs" flex="justify-center items-center col" hidden text-center>
      <div m-b-xs>
        扫码登录
      </div>
      <div w="3/5" aspect-ratio-1 border="1 solid gray" />
      <div text="gray xs" m="y-sm">
        使用北风课堂APP扫码登录
      </div>
    </div>
  </el-form>
</template>

<style scoped lang="scss">

</style>
