<template>
  <div class="layout">
    <bf-header />
    <main class="main">
      <slot />
    </main>
    <bf-footer />
  </div>
</template>

<style scoped>
.layout{
  --uno: h-full flex flex-col items-center;
}
.main{
  --uno: flex-1 container p-t-70px;
}
</style>
