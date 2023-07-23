<template>
  <div>
    <NavBar />
    <div class="container">
      <slot></slot>
    </div>
    <BasicFooter />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 64px;
}
</style>
