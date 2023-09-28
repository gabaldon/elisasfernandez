<template>
  <section class="case-study-padding header">
    <div class="logo">
      <SchoolPayLogo class="logo" />
      <h3 class="title">School pay</h3>
    </div>
    <NuxtImg
      class="mockup"
      provider="cloudinary"
      src="/v1695133321/cover/mockup_vt7klx.png"
      alt="Schoolpay logo"
      loading="lazy"
      sizes="sm:355px md:320px lg:800px"
    />
    <div class="case-study-chips">
      <CaseStudyChip v-for="chip in headerChips" :key="chip" :text="$t(chip)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SchoolPayLogo from '@/assets/svg/schoolpay-logo.svg'
const headerChips: Ref<Array<string>> = ref([
  'case-study',
  'figma',
  'individual-role',
  'ironhack',
  '10days',
])
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient($schoolpay-purple, $schoolpay-blue);
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  max-width: 100vw;
  justify-content: center;
  justify-items: center;
  grid-gap: 100px;
  row-gap: 24px;
  .title {
    font-family: 'Chango';
    font-size: 48px;
    color: white;
    text-align: center;
  }
  .logo {
    display: grid;
    justify-items: center;
    align-items: center;
    .logo {
      width: 100px;
    }
    .title {
      width: 350px;
    }
  }
  .mockup {
    max-width: 40vw;
  }
  .case-study-chips {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
}
@media (max-width: 1200px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
}
@media (max-width: 600px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100vw;
    grid-gap: 50px;
    .logo {
      .logo {
        width: 30vw;
      }
      .title {
        width: 80vw;
        font-size: 32px;
      }
    }
    .mockup {
      max-width: 70vw;
    }
  }
}
</style>
