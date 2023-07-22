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
  margin: 0 auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  background-color: $white;
  align-items: center;
  text-align: center;
}
</style>
