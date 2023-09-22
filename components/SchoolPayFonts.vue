<template>
  <SchoolPaySection>
    <div class="fonts">
      <h3 class="schoolpay-title gradient">{{ $t('fonts') }}</h3>
      <div class="image-container">
        <ChangoFont class="image" />
        <AvenirFont class="image" />
      </div>
    </div>
  </SchoolPaySection>
</template>

<script setup>
import ChangoFont from '@/assets/svg/chango.svg'
import AvenirFont from '@/assets/svg/avenir.svg'
</script>

<style lang="scss" scoped>
.case-study-padding {
  background-color: $light-grey;
}
.fonts {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  font-size: 24px;
  .image-container {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 108px;
    flex-wrap: wrap;
    .image {
      max-width: 20vw;
      height: max-content;
    }
  }
}
@media (max-width: 600px) {
  .fonts {
    grid-gap: 32px;
    max-width: 100%;
    .image-container {
      display: flex;
      gap: 24px;
      .image {
        max-width: 30vw;
      }
    }
  }
}
</style>
