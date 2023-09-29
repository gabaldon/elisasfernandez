<template>
  <CaseStudySection>
    <div class="section">
      <BlablacarLogo class="logo" />
      <BlablacarMockup class="mockup" />
      <div class="case-study-chips">
        <CaseStudyChip
          v-for="chip in headerChips"
          :key="chip"
          :text="$t(chip)"
          :color="'#054752'"
          :text-color="'#fff'"
        />
      </div>
    </div>
  </CaseStudySection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlablacarLogo from '@/assets/svg/blablacar/blabla-titulo.svg'
import BlablacarMockup from '@/assets/svg/blablacar/foto-cover.svg'
const headerChips: Ref<Array<string>> = ref([
  'case-study',
  'figma',
  'collaborative-work',
  'new-feature',
  'ironhack',
  '5days',
])
</script>

<style lang="scss" scoped>
.section {
  background: $white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  column-gap: 100px;
  row-gap: 100px;
  .logo {
    max-width: 100%;
    height: auto;
  }
  .mockup {
    max-width: 100%;
    height: max-content;
  }
  .case-study-chips {
    grid-column: auto / span 2;
    justify-self: flex-start;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
}
@media (max-width: 1200px) {
  .section {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;
    .case-study-chips {
      grid-column: 1;
    }
  }
}
@media (max-width: 600px) {
  .section {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
}
</style>
