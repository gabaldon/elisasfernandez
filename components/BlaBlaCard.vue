<template>
  <div class="blue-background">
    <div class="project-card-container">
      <img
        class="top-choice-icon"
        src="@/assets/svg/blablacar-title.svg"
        alt="Blablacar title"
      />
      <p class="description">{{ $t('top-choice-description') }}</p>
      <div class="btns-container">
        <NuxtLink to="/blablacar/prototype">
          <CustomButton :type="'primary'">{{ $t('prototype') }}</CustomButton>
        </NuxtLink>
        <NuxtLink to="/blablacar">
          <CustomButton type="secondary">{{ $t('case-study') }}</CustomButton>
        </NuxtLink>
      </div>
    </div>
    <img
      class="image"
      src="~/assets/png/blablacar-mockup.png"
      alt="Blablacar mockup"
    />
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 400px;
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
