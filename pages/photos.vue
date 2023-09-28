<template>
  <NuxtLayout>
    <HeroSection />
    <PhotoSettings />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Elisa S Fernández',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'I am a photographer based in Madrid',
    },
  ],
})
</script>

<style lang="scss" scoped>
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
