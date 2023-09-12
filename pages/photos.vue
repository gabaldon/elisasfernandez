<template>
  <NuxtLayout>
    <HeroSection />
    <PhotoSettings />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: t('head.title'),
  meta: [
    {
      name: t('head.title'),
      content: t('head.photo-description'),
    },
  ],
})
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
