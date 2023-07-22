<template>
  <div class="blue-background">
    <nuxt-picture
      format="avif,webp"
      src="/png/top-choice-mockup.png"
      alt="Top choice mockup"
      sizes="sm:200px md:400px lg:600px"
      loading="lazy"
      quality="100"
    />
    <div class="project-card-container">
      <img
        class="top-choice-icon"
        src="@/assets/svg/top-choice-title.svg"
        alt="Top Choice title"
      />
      <p class="description">{{ this.$t('top-choice-description') }}</p>
      <div class="btns-container">
        <CustomButton :type="'primary'">{{ this.$t('Prototype') }}</CustomButton>
        <CustomButton type="secondary">{{ this.$t('Case study') }}</CustomButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blue-background {
  background-color: $blue;
  padding: 120px 70px;
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
    color: $white;
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
}
@media (max-width: 600px) {
  .blue-background {
    padding: 32px 16px;
    margin: 16px;
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
