<script setup lang="ts">
</script>

<template>
  <div h-full flex="~ justify-center items-center">
    <div sm="text-sm" rounded-xl bg-white p-2xl text-xs>
      <NuxtPage />
      <div text="xs center" m-t-sm>
        登录即表示同意平台 <nuxt-link c-primary to="/">
          《隐私政策》
        </nuxt-link>和 <nuxt-link c-primary to="/">
          《用户协议》
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
