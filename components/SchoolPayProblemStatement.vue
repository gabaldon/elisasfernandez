<template>
  <CaseStudySection>
    <div class="problem-statement">
      <i18n-t
        keypath="problem-statement"
        tag="h3"
        class="schoolpay-title gradient"
      >
        <br />
      </i18n-t>
      <p class="prototype">
        {{ $t('problem-statement-1') }}
      </p>
      <div class="image-container">
        <NuxtImg
          class="image"
          provider="cloudinary"
          src="/v1695579246/user-persona_ltt9zk.png"
          alt="Problem Statemen"
          loading="lazy"
          sizes="sm:355px md:320px lg:800px"
        />
        <NuxtImg
          class="image"
          provider="cloudinary"
          src="/v1695579246/survey_ur7fhx.png"
          alt="Problem Statemen"
          loading="lazy"
          sizes="sm:355px md:320px lg:800px"
        />
      </div>
      <p>
        {{ $t('problem-statement-2') }}
      </p>
      <div class="image-container">
        <NuxtImg
          class="image"
          provider="cloudinary"
          src="/v1695579316/empathy-map_qg8o8z.png"
          alt="Problem Statemen"
          loading="lazy"
          sizes="sm:355px md:320px lg:800px"
        />
      </div>
    </div>
  </CaseStudySection>
</template>

<style lang="scss" scoped>
.problem-statement {
  display: grid;
  grid-gap: 100px;
  .image-container {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    .image {
      max-width: 30vw;
    }
  }
}
@media (max-width: 600px) {
  .problem-statement {
    grid-gap: 32px;
    .image-container {
      display: grid;
      .image {
        max-width: 100%;
      }
    }
  }
}
</style>
