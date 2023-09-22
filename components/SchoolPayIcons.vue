<template>
  <SchoolPaySection>
    <div class="fonts">
      <h3 class="schoolpay-title gradient">{{ $t('icons') }}</h3>
      <div class="icons-container">
        <IconsBox class="image" />
        <div class="column">
          <NavBarIcons class="image" />
          <SillaIcons class="image" />
        </div>
      </div>
    </div>
  </SchoolPaySection>
</template>

<script setup>
import IconsBox from '@/assets/svg/icons-box.svg'
import NavBarIcons from '@/assets/svg/navbar-icons.svg'
import SillaIcons from '@/assets/svg/silla-icons.svg'
</script>

<style lang="scss" scoped>
.fonts {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  font-size: 24px;
  .icons-container {
    width: 100%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    .column {
      display: grid;
      grid-template-rows: max-content;
      grid-gap: 16px;
    }
    .image {
      max-width: 30vw;
      height: max-content;
    }
  }
}
@media (max-width: 600px) {
  .fonts {
    grid-gap: 32px;
    max-width: 100%;
    .icons-container {
      grid-template-columns: 1fr;
      grid-gap: 16px;
      grid-template-rows: repeat(3, max-content);
      height: max-content;
      .image {
        height: auto;
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
</style>
