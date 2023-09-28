<template>
  <section class="case-study-padding">
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.case-study-padding {
  display: flex;
  justify-content: center;
}
.content {
  max-width: 70vw;
  width: 100%;
  font-size: 24px;
}
@media (max-width: 900px) {
  .content {
    max-width: 100%;
    font-size: 18px;
  }
}
@media (max-width: 600px) {
  .content {
    max-width: 100%;
    font-size: 16px;
  }
}
</style>
