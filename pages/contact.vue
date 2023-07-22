<template>
  <NuxtLayout>
    <div class="contact-container">
      <i18n-t keypath="about-me-title" tag="h3" class="contact-title">
        <span class="highlighted-text">{{
          $t('contact').toLocaleLowerCase()
        }}</span>
      </i18n-t>
      <div class="contact-links">
        <div class="social-container">
          <p class="social-title">Mail</p>
          <a
            class="social-link"
            target="_blank"
            href="mailto:elisasanchezfernandez@gmail.com"
            >elisasanchezfernandez@gmail.com</a
          >
        </div>
        <div class="social-container">
          <p class="social-title">LinkedIn</p>
          <a
            class="social-link"
            target="_blank"
            href="https://www.behance.net/elisa-sf"
            >/in/elisasanchezfernandez/</a
          >
        </div>
        <div class="social-container">
          <p class="social-title">Behance</p>
          <a
            class="social-link"
            target="_blank"
            href="https://www.behance.net/elisa-sf"
            >https://www.behance.net/elisa-sf</a
          >
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.contact-container {
  display: grid;
  grid-template-rows: repeat(2, max-content);
  min-height: 100vh;
  .contact-title {
    max-width: 700px;
    font-size: 120px;
    font-family: 'PPMori';
    margin-left: 24px;
    margin-bottom: 48px;
    .highlighted-text {
      color: $yellow;
    }
  }
  .contact-links {
    margin-left: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    .social-title {
      padding: 8px 16px;
      font-weight: bold;
      border-bottom: 0.6px solid $black;
      margin-bottom: 8px;
    }
  }
}
@media (max-width: 600px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 300px) {
  .contact-container {
    .contact-content {
      .contact-title {
        font-size: 80px;
      }
    }
  }
}
</style>
