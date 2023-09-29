<template>
  <CaseStudySection>
    <div class="screens">
      <h3 class="schoolpay-title gradient">{{ $t('screens') }}</h3>
      <div class="screen-section">
        <ShowOnIntersection>
          <AutoplayVideo
            :url="'https://res.cloudinary.com/gabaldon/video/upload/v1695127309/schoolpay_prototype_1_intro_i0aunh.mp4'"
          />
        </ShowOnIntersection>
        <div>
          <i18n-t
            keypath="launch-screen-title"
            tag="h4"
            class="schoolpay-subtitle gradient"
          >
            <br />
          </i18n-t>
          <p>
            {{ $t('launch-screen-description') }}
          </p>
        </div>
      </div>
      <div class="screen-section">
        <div class="description-container">
          <i18n-t
            keypath="home-profile-title"
            tag="h4"
            class="schoolpay-subtitle gradient"
          >
            <br />
          </i18n-t>
          <p>
            {{ $t('home-profile-description-1') }}
          </p>
          <p>
            {{ $t('home-profile-description-2') }}
          </p>
        </div>
        <NuxtImg
          class="image"
          provider="cloudinary"
          src="/v1695545705/mano_g2e3su.png"
          alt="background image hand okay"
          loading="lazy"
          sizes="sm:355px md:320px lg:800px"
        />
        <div class="image-container">
          <NuxtImg
            class="first-image image-mockup"
            provider="cloudinary"
            src="/v1695133352/2-img2-home-profile_trgryq.png"
            alt="background image hand okay"
            loading="lazy"
            sizes="sm:355px md:320px lg:800px"
          />
          <NuxtImg
            class="image-mockup"
            provider="cloudinary"
            src="/v1695464149/img2-fill-mano_hfal5f.png"
            alt="background image hand okay"
            loading="lazy"
            sizes="sm:355px md:320px lg:800px"
          />
        </div>
      </div>
      <div class="screen-section">
        <ShowOnIntersection>
          <AutoplayVideo
            :url="'https://res.cloudinary.com/gabaldon/video/upload/v1695127309/schoolpay_prototype_2_excursion_qfgvje.mp4'"
          />
        </ShowOnIntersection>
        <div>
          <h4 class="schoolpay-subtitle gradient">
            {{ $t('authorized-activities-title') }}
          </h4>
          <p>
            {{ $t('authorized-activities-description') }}
          </p>
        </div>
      </div>
      <div class="screen-section">
        <div class="description-container">
          <h4 class="schoolpay-subtitle gradient">
            {{ $t('cafeteria-booking-title') }}
          </h4>
          <p>
            {{ $t('cafeteria-booking-desciption') }}
          </p>
        </div>
        <ShowOnIntersection class="video-container">
          <AutoplayVideo
            :url="'https://res.cloudinary.com/gabaldon/video/upload/v1695127309/schoolpay_prototype_3_comedor_ovn50r.mp4'"
          />
        </ShowOnIntersection>
      </div>
      <div class="screen-section">
        <ShowOnIntersection>
          <AutoplayVideo
            :url="'https://res.cloudinary.com/gabaldon/video/upload/v1695127309/schoolpay_prototype_4_stats_rph7u2.mp4'"
          />
        </ShowOnIntersection>
        <div class="description-container">
          <h4 class="schoolpay-subtitle gradient">
            {{ $t('check-expenses-title') }}
          </h4>
          <p>
            {{ $t('check-expenses-description') }}
          </p>
        </div>
      </div>
    </div>
  </CaseStudySection>
</template>

<style lang="scss" scoped>
.screens {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  .screen-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    position: relative;
    grid-gap: 50px;
    grid-gap: 50px;
    .video {
      width: 20vw;
    }
    .schoolpay-subtitle {
      position: relative;
      z-index: 300;
    }
    .image-container {
      margin-top: 148px;
      position: relative;
      z-index: 300;
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 30vw;
      margin-top: 150px;
      justify-content: center;
      gap: 16px;
      .first-image {
        margin-bottom: 58px;
      }
    }
    .description-container {
      position: relative;
      display: grid;
      grid-gap: 24px;
      z-index: 300;
      .image-mockup {
        max-width: 60vw;
      }
    }
    .image {
      position: absolute;
      z-index: 200;
      top: 0;
      right: 0;
      width: 30%;
      &.left {
        left: 0;
        right: none;
      }
    }
  }
}
@media (max-width: 600px) {
  .screens {
    max-width: 100%;
    grid-gap: 24px;
    .screen-section {
      margin-bottom: 32px;
      max-width: 100%;
      margin-top: 0;
      grid-gap: 0;
      display: grid;
      grid-template-columns: 1fr;
      .video-container {
        grid-row: 1;
        display: grid;
      }
      .image {
        display: none;
      }
      .image-container {
        max-width: 70vw;
        margin-top: 0;
        grid-row: 1;
      }
      .description-container {
        grid-gap: 0;
      }
    }
  }
}
</style>
