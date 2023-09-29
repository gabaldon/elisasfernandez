<template>
  <CaseStudySection>
    <div class="blablacar-prototype">
      <h3 class="blablacar-title">{{ $t('prototype') }}</h3>
      <video
        controls
        :src="'https://res.cloudinary.com/gabaldon/video/upload/v1695925306/def-blabla-web_odkds0.mp4'"
        class="prototype"
      ></video>
    </div>
  </CaseStudySection>
</template>

<style lang="scss" scoped>
.blablacar-prototype {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  .prototype {
    width: 100%;
    max-height: 70vh;
  }
}
@media (max-width: 600px) {
  .blablacar-prototype {
    grid-gap: 32px;
  }
}
</style>
