<template>
  <NuxtLayout>
    <div class="contact-container">
      <i18n-t keypath="contact-me-title" tag="h3" class="contact-title">
        <span class="highlighted-text">{{
          $t('contact-me').toLocaleLowerCase()
        }}</span>
      </i18n-t>
      <div class="contact-links">
        <div class="social-container">
          <p class="social-title">Mail</p>
          <a
            class="social-link"
            target="_blank"
            aria-label="Send an email to Elisa S Fenandez"
            href="mailto:elisasanchezfernandez@gmail.com"
            >elisasanchezfernandez@gmail.com</a
          >
        </div>
        <div class="social-container">
          <p class="social-title">LinkedIn</p>
          <a
            class="social-link"
            target="_blank"
            aria-label="Go to Linkendin profile"
            href="https://www.linkedin.com/in/elisasanchezfernandez/"
            >/in/elisasanchezfernandez/</a
          >
        </div>
        <div class="social-container">
          <p class="social-title">Behance</p>
          <a
            class="social-link"
            target="_blank"
            aria-label="Go to Behance profile"
            href="https://www.behance.net/elisa-sf"
            >https://www.behance.net/elisa-sf</a
          >
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: t('head.title'),
  meta: [
    {
      name: t('head.title'),
      content: t('head.contact-description'),
    },
  ],
})
</script>
<style lang="scss" scoped>
.contact-container {
  display: grid;
  grid-template-rows: repeat(2, max-content);
  min-height: 100vh;
  padding-bottom: 32px;
  .contact-title {
    max-width: 700px;
    font-size: 120px;
    font-family: 'PPMori';
    margin: 24px 24px 48px 24px;
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
    .contact-title {
      font-size: 70px;
    }
  }
}
@media (max-width: 300px) {
  .contact-container {
    .contact-title {
      font-size: 58px;
      margin: 16px;
    }
    .contact-links {
      margin-left: 16px;
    }
  }
}
</style>
