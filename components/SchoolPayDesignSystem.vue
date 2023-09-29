<template>
  <CaseStudySection>
    <div class="ds">
      <h3 class="schoolpay-title gradient">{{ $t('design-system') }}</h3>
      <div class="image-container">
        <div class="column">
          <Ds2022 class="image" />
          <ChartContainerLine class="image" />
        </div>
        <div class="column">
          <ContaineCalendar class="image" />
          <SlideButton class="image" />
          <ChartContainerPie class="image" />
        </div>
        <div class="column">
          <InfoBox class="image" />
          <Profile class="image" />
        </div>
      </div>
    </div>
  </CaseStudySection>
</template>

<script setup>
import Ds2022 from '@/assets/svg/2022-ds.svg'
import ChartContainerLine from '@/assets/svg/chart-container-line-ds.svg'
import ChartContainerPie from '@/assets/svg/chart-container-pie-ds.svg'
import ContaineCalendar from '@/assets/svg/container-calendar-ds.svg'
import InfoBox from '@/assets/svg/info_caja-ds.svg'
import Profile from '@/assets/svg/profile-ds.svg'
import SlideButton from '@/assets/svg/slide-button-ds.svg'
</script>

<style lang="scss" scoped>
.ds {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  .image-container {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    .column {
      display: grid;
      grid-template-rows: 1fr;
      justify-items: center;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      grid-gap: 32px;
    }
    .image {
      max-width: 20vw;
      height: max-content;
    }
  }
}
@media (max-width: 600px) {
  .ds {
    grid-gap: 32px;
    max-width: 100%;
    .image-container {
      grid-template-columns: max-content;
      grid-template-rows: max-content;
      grid-gap: 16px;
      .image {
        width: 100%;
        height: auto;
        max-width: 70vw;
      }
    }
  }
}
</style>
