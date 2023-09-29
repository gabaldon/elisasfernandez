<template>
  <CaseStudySection class="section">
    <BlablacarSectionContent>
      <CarTitle class="car-logo" />
      <h3 class="blablacar-title">{{ $t('blablacar-about-title') }}</h3>
      <p>{{ $t('blablacar-about-description') }}</p>
    </BlablacarSectionContent>
  </CaseStudySection>
</template>

<script setup>
import CarTitle from '@/assets/svg/blablacar/car.svg'
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  margin-top: 100px;
}
.blablacar-title {
  margin-top: 50px;
}
.section-content {
  position: relative;
  .car-logo {
    position: absolute;
    max-height: 200px;
    top: -80px;
    left: 0;
    width: max-content;
  }
}
@media (max-width: 600px) {
  .car-logo {
    max-height: auto;
    max-width: 70vw;
  }
}
</style>
