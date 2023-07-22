<template>
  <NuxtLayout>
    <HeroSection />
    <TopChoiceCard />
    <BlaBlaCard />
  </NuxtLayout>
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
</style>
