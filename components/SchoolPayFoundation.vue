<template>
  <SchoolPaySection>
    <div class="foundation">
      <h3 class="schoolpay-title gradient">{{ $t('foundation') }}</h3>
      <div class="foundation-grid">
        <div class="image-container">
          <Color0 class="image" />
          <Color1 class="image" />
          <Color2 class="image" />
          <Color3 class="image" />
        </div>
        <div class="image-container">
          <Shadows1 class="image" />
          <Shadows2 class="image" />
          <Shadows3 class="image" />
          <Shadows4 class="image" />
        </div>
        <div class="image-container">
          <BorderRadius0 class="image" />
          <BorderRadius1 class="image" />
        </div>
      </div>
    </div>
  </SchoolPaySection>
</template>

<script setup>
import BorderRadius0 from '@/assets/svg/Border_Radius-0.svg'
import BorderRadius1 from '@/assets/svg/Border_Radius-1.svg'
import Color0 from '@/assets/svg/color-0.svg'
import Color1 from '@/assets/svg/color-1.svg'
import Color2 from '@/assets/svg/color-2.svg'
import Color3 from '@/assets/svg/color-3.svg'
import Shadows1 from '@/assets/svg/shadows1.svg'
import Shadows2 from '@/assets/svg/shadows2.svg'
import Shadows3 from '@/assets/svg/shadows3.svg'
import Shadows4 from '@/assets/svg/shadows4.svg'
</script>

<style lang="scss" scoped>
.case-study-padding {
  background-color: $light-grey;
}
.foundation {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  font-size: 24px;
  .foundation-grid {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 32px;
    .image {
      max-width: 70%;
    }
  }
  .image-container {
    justify-content: center;
    align-items: flex-start;
    display: grid;
    grid-template-rows: max-content;
    grid-gap: 54px;
    flex-wrap: wrap;
  }
}
@media (max-width: 600px) {
  .foundation {
    grid-gap: 32px;
    .foundation-grid {
      grid-gap: 24px;
      grid-template-columns: 33% 40%;
      .image {
        max-width: 100%;
      }
    }
  }
  .schoolpay-title {
    font-size: 24px;
  }
}
@media (max-width: 300px) {
  .foundation {
    .foundation-grid {
      grid-gap: 32px;
      grid-template-columns: repeat(1, 1fr);
    }
    .image-container {
      .image {
        max-width: 50vw;
      }
    }
  }
}
</style>
