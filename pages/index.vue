<template>
  <div class="container">
    <h1>
      Comming soon...
    </h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      name: 'index',
      title: this.$t('head.title'),
      meta: [
        {
          name: this.$t('head.title'),
          content: this.$t('description'),
        },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
