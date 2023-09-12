<template>
  <NuxtLayout>
    <HeroSection />
    <div v-if="!globalStore.showPhotos">
      <TopChoiceCard />
      <SchoolPayCard />
      <BlaBlaCard />
    </div>
    <PhotoGrid v-else />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'
const { t } = useI18n()
const globalStore = useGlobalStore()
useHead({
  title: t('head.title'),
  meta: [
    {
      name: t('head.title'),
      content: t('description'),
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
