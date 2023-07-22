<template>
  <div class="footer">
    <h1 class="name">{{ $t('name') }}</h1>
    <div class="footer-links">
      <a
        class="footer-link"
        href="https://www.instagram.com/elimita/"
        target="_blank"
        ><img class="icon" src="@/assets/svg/logo-instagram.svg"
      /></a>
      <a
        class="footer-link"
        href="https://www.linkedin.com/in/elisasanchezfernandez/"
        target="_blank"
        ><img class="icon" src="@/assets/svg/logo-linkedin.svg"
      /></a>
      <a
        class="footer-link"
        href="https://www.behance.net/elisa-sf"
        target="_blank"
        ><img class="icon" src="@/assets/svg/logo-behance.svg"
      /></a>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: $black;
  color: $white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .name {
    padding: 24px;
    font-size: 16px;
    margin: 0;
  }
  .footer-links {
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    column-gap: 24px;
    margin-right: 24px;
  }
}
</style>
