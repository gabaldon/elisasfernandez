<template>
  <section class="case-study-padding header">
    <div class="logo">
      <SchoolPayLogo class="logo" />
      <h3 class="title">School pay</h3>
    </div>
    <NuxtImg
      class="mockup"
      provider="cloudinary"
      src="/v1695133321/cover/mockup_vt7klx.png"
      alt="Schoolpay logo"
      loading="lazy"
      sizes="sm:355px md:320px lg:800px"
    />
  </section>
</template>

<script setup>
import SchoolPayLogo from '@/assets/svg/schoolpay-logo.svg'
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient($schoolpay-purple, $schoolpay-blue);
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 100px;
  .title {
    font-family: 'Chango';
    font-size: 48px;
    color: white;
    text-align: center;
  }
  .logo {
    display: grid;
    justify-items: center;
    align-items: center;
    .logo {
      width: 100px;
    }
    .title {
      width: 350px;
    }
  }
  .mockup {
    max-width: 40vw;
  }
}
@media (max-width: 600px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100vw;
    grid-gap: 50px;
    .logo {
      .logo {
        width: 30vw;
      }
      .title {
        width: 80vw;
        font-size: 32px;
      }
    }
    .mockup {
      max-width: 70vw;
    }
  }
}
</style>
