<template>
  <div class="container">
    <div class="under-constrution">
      <nuxt-picture
        sizes="sm:200px md:400px lg:800px"
        format="avif,webp"
        class="comming-soon"
        loading="lazy"
        src="../public/logo.png"
        alt="Comming soon..."
      />
      <h1>{{ $t('title') }}</h1>
    </div>
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
  .under-constrution {
    display: grid;
    grid-template-rows: max-content max-content;
    justify-items: center;
    width: 250px;
  }
  .comming-soon {
    width: 200px;
    display: flex;
    justify-content: center;
  }
}
</style>
