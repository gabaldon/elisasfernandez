<template>
  <div class="section-content">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.section-content {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
  color: $blablacar-text;
}
</style>
