<script setup lang="ts">
useHead({
  title: '登录',
})
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="/">
        <img src="/logo.png" class="logo" alt="logo" title="首页">
      </a>
      <nav>
        <a href="javascript:;">
          你哈
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header{
  --uno: fixed w-full top-0 bg-white h-70px lh-70px flex justify-center;
}
.container{
--uno: flex items-center justify-between;
}
.logo{
  --uno: w-200px;
}
</style>
