<template>
  <NuxtLayout>
    <HeroSection />
    <TopChoiceCard />
    <SchoolPayCard />
    <BlaBlaCard />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: t('head.title'),
  meta: [
    {
      name: 'description',
      content:
        'Elisa S Fernández is a UX/UI designer based in Madrid - elisasanchezfernandez@gmail.com',
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
