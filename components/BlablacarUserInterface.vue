<template>
  <CaseStudySection>
    <BlablacarSectionContent>
      <h3 class="blablacar-title">{{ $t('user-interface-title') }}</h3>
      <NuxtImg
        class="full-screen-mockup"
        provider="cloudinary"
        src="/v1696159978/user-interface_olsgwv.png"
        alt="Problem Statemen"
        loading="lazy"
        sizes="sm:355px md:320px lg:800px"
      />
    </BlablacarSectionContent>
  </CaseStudySection>
</template>

<style lang="scss" scoped>
.full-screen-mockup {
  justify-self: center;
}
</style>
