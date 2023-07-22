<template>
  <div>
    <NavBar />
    <div class="container">
      <slot></slot>
    </div>
    <BasicFooter />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
