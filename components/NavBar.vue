<template>
  <header class="navbar">
    <NuxtLink class="logo-link" to="/" rel="home"><MainLogo /></NuxtLink>
    <input id="side-menu" class="checkbox" type="checkbox" />
    <nav class="navbar-tabs rounded-border">
      <ul class="navbar-links rounded-border">
        <div class="close-menu-container" @click="closeMenu">
          <Close />
        </div>
        <li class="yellow">
          <NuxtLink class="link" to="/about" rel="about">{{
            $t('about-me')
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/contact" rel="contact">{{
            $t('contact')
          }}</NuxtLink>
        </li>
        <li class="yellow">
          <a
            aria-label="Download CV from google drive"
            class="link"
            target="_blank"
            href="https://drive.google.com/drive/folders/1UD6pTkab1vyQJ99DkS1CJmsbzeI97Aup?usp=sharing"
            >{{ $t('cv') }}</a
          >
        </li>
        <li class="link language-select">
          <LanguageSelector />
        </li>
      </ul>
    </nav>
    <label for="side-menu" class="hamburguer-container">
      <div ref="menu" for="side-menu">
        <Hamburger class="hamburguer" />
      </div>
    </label>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
import Hamburger from '@/assets/svg/hamburguer.svg'
import Close from '@/assets/svg/close.svg'
const menu = ref()

function closeMenu() {
  menu.value.click()
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $grey;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  margin-top: 16px;
  top: -16px;
  z-index: 500;
  .logo-link {
    color: $black;
    text-decoration: none;
  }
  .close-menu-container {
    display: none;
  }
  .checkbox {
    display: none;
  }
  .navbar-links {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    align-items: flex-start;
    justify-content: space-between;
    .link {
      padding: 24px 16px;
      text-decoration: none;
      font-size: 16px;
      text-decoration: none;
      width: max-content;
      display: block;
      color: $black;
      &:hover {
        color: grey;
      }
      &.language-select {
        padding: 16px;
        justify-self: flex-end;
        width: max-content;
      }
    }
  }
  .hamburguer-container {
    display: none;
    .hamburguer {
      padding: 24px;
    }
  }
}
@media (max-width: 706px) {
  .navbar {
    .navbar-tabs {
      display: block;
      .navbar-links {
        height: 0;
      }
    }
    .checkbox:checked ~ .navbar-tabs {
      display: block;
      .navbar-links {
        height: 40vh;
        opacity: 1;
      }
    }
    .close-menu-container {
      display: none;
    }
    .hamburguer-container {
      display: block;
    }
    .yellow {
      background-color: $yellow;
    }
    .rounded-border {
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
    }
    .navbar-links {
      padding: 0;
      display: grid;
      grid-template-rows: repeat(4, max-content);
      grid-template-columns: 1fr;
      position: fixed;
      width: 100vw;
      z-index: 500;
      right: 0;
      left: 0;
      bottom: 0;
      gap: 0;
      background-color: $grey;
      opacity: 1;
      transition: all 0.75s ease;
      .link {
        padding: 8px 16px 8px 16px;
        width: 100%;
        &.language-select {
          padding: 0px;
          justify-self: flex-end;
        }
      }
      .close-menu-container {
        padding: 16px;
        display: flex;
        justify-content: flex-end;
      }
      li {
        height: max-content;
      }
    }
  }
}
</style>
