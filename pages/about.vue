<template>
  <NuxtLayout>
    <div class="about-container">
      <div class="about-content">
        <i18n-t keypath="about-me-title" tag="h3" class="about-title">
          <span class="highlighted-text">{{
            $t('about').toLocaleLowerCase()
          }}</span>
        </i18n-t>
        <p class="text">{{ $t('about-me-1') }}</p>
        <p class="text">{{ $t('about-me-2') }}</p>
        <p class="text">
          {{ $t('about-me-3') }}
          <a
            class="email"
            target="_blank"
            href="mailto:elisasanchezfernandez@gmail.com"
            >elisasanchezfernandez@gmail.com</a
          >
        </p>
      </div>
      <div class="what-i-do">
        <h3 class="title">{{ $t('what-i-do') }}</h3>
        <ul class="skills">
          <li>Figma</li>
          <li>HTML & CSS</li>
          <li>Design Thinking Methodology</li>
          <li>Agile methodology</li>
          <li>Visual design</li>
          <li>UX research</li>
          <li>Information Architecture</li>
          <li>Site redesign</li>
          <li>Design Systems</li>
          <li>Prototyping</li>
          <li>Wireframing</li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.about-container {
  display: grid;
  grid-template-columns: 1fr max-content;
  min-height: 100vh;
  .about-content {
    max-width: 600px;
    margin: 24px;
    .about-title {
      font-size: 120px;
      font-family: 'PPMori';
      display: inline-block;
      .highlighted-text {
        display: inline-block;
        color: $yellow;
      }
    }
    .text {
      line-height: 1.5;
      margin: 24px 0;
      max-width: 500px;
      font-size: 16px;
      font-family: 'Lato';
      font-weight: lighter;
    }
    .email {
      font-weight: bold;
    }
  }
}
.what-i-do {
  padding: 32px;
  text-align: right;
  .title {
    font-family: 'PPMori';
    font-weight: bold;
  }
  .skills {
    font-size: 16px;
    font-weight: lighter;
    li {
      margin: 24px 0;
    }
  }
}
@media (max-width: 600px) {
  .about-container {
    grid-template-columns: 1fr;
    .about-content {
      .about-title {
        font-size: 80px;
      }
    }
  }
}
@media (max-width: 300px) {
  .about-container {
    .about-content {
      margin: 16px;
      .about-title {
        font-size: 60px;
      }
    }
  }
}
</style>
