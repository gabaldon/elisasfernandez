<template>
  <div class="blue-background">
    <div class="project-card-container">
      <img
        class="top-choice-icon"
        src="@/assets/svg/blablacar-title.svg"
        alt="Blablacar title"
      />
      <p class="description">{{ $t('blablacar-description') }}</p>
      <div class="btns-container">
        <NuxtLink to="/blablacar/prototype">
          <CustomButton :type="'primary'">{{ $t('prototype') }}</CustomButton>
        </NuxtLink>
        <NuxtLink v-if="isDesktop" to="/blablacar">
          <CustomButton type="with-border">{{ $t('case-study') }}</CustomButton>
        </NuxtLink>
        <a
          v-else
          target="_blank"
          href="https://www.behance.net/gallery/176023503/BLABLACAR-NEW-FEATURE-CASE-STUDY"
        >
          <CustomButton type="secondary">{{ $t('case-study') }}</CustomButton>
        </a>
      </div>
    </div>
    <img
      class="image"
      src="~/assets/png/blablacar-mockup.png"
      alt="Blablacar mockup"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const isDesktop = computed(() => {
  const platform = navigator.platform.toLowerCase()
  return /mac|macintel|win|linux/i.test(platform)
})
</script>

<style lang="scss" scoped>
.image {
  width: 300px;
}
.blue-background {
  background-color: $white;
  padding: 34px 70px 34px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .project-card-container {
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(3, max-content);
    align-items: center;
    row-gap: 8px;
    text-align: center;
    color: $black;
    font-size: 16px;
    font-weight: lighter;
    .btns-container {
      margin-top: 32px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, max-content);
      grid-gap: 16px;
    }
  }
}
@media (max-width: 1200px) {
  .project-card-container {
    margin-top: 32px;
  }
  .image {
    margin-top: 32px;
  }
}
@media (max-width: 600px) {
  .image {
    width: 100px;
  }
  .blue-background {
    padding: 32px 16px;
    margin: 16px;
    background-color: $green;
    border-radius: 24px;
    .project-card-container {
      .top-choice-icon {
        max-width: 80vw;
      }
      .btns-container {
        margin-top: 16px;
        grid-template-columns: 1fr;
        justify-items: center;
        .btn {
          width: max-content;
        }
      }
    }
  }
}
</style>
