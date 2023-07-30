<script setup lang="ts">
import type { FormInstance } from 'element-plus'

interface FormData {
  account: string// 账号-->可以为手机号和学生学号
  password: string// 密码
  code: string// 验证码
  forgotPasswordStep: 0 | 1 | 2 | 3// 找回密码到第几个步骤
}

// 表单实例
const formRef = ref<FormInstance>()

/**
 * 初始化数据
 */
const formData = reactive<FormData>({
  account: '',
  password: '',
  code: '',
  forgotPasswordStep: 0,
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
  <el-form ref="formRef" :model="formData" sm="text-sm" min-w-xs rounded-xl bg-white p-2xl text-xs>
    <div>
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
</template>

<style scoped lang="scss">

</style>
