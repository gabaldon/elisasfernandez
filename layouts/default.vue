<template>
  <div class="main-container">
    <NavBar />
    <div class="container">
      <slot></slot>
    </div>
    <BasicFooter />
  </div>
</template>

<style lang="scss">
.main-container {
  min-height: 100vh;
  display: grid;
  align-items: flex-end;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 64px;
}
</style>
