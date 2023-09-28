<template>
  <SchoolPaySection>
    <div class="schoolpay-prototype">
      <h3 class="schoolpay-title gradient">{{ $t('prototype') }}</h3>
      <video
        controls
        :src="'https://res.cloudinary.com/gabaldon/video/upload/v1695316999/prototipo-schoolwallet_xjo1ar.mp4'"
        class="prototype"
      ></video>
    </div>
  </SchoolPaySection>
</template>

<style lang="scss" scoped>
.schoolpay-prototype {
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
  .schoolpay-prototype {
    grid-gap: 32px;
  }
}
</style>
