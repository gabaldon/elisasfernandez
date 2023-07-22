<template>
  <header class="navbar">
    <NuxtLink class="logo-link" to="/"><MainLogo /></NuxtLink>
    <input id="side-menu" class="checkbox" type="checkbox" />
    <nav class="navbar-tabs rounded-border">
      <ul class="navbar-links rounded-border">
        <div class="close-menu-container" @click="closeMenu">
          <img src="@/assets/svg/close.svg" alt="close menu" />
        </div>
        <li class="yellow">
          <a
            class="link"
            target="_blank"
            href="mailto:elisasanchezfernandez@gmail.com"
            >{{ $t('contact') }}</a
          >
        </li>
        <li>
          <a
            class="link"
            target="_blank"
            href="https://www.linkedin.com/in/elisasanchezfernandez/"
            >{{ $t('cv') }}</a
          >
        </li>
      </ul>
    </nav>
    <label for="side-menu" class="hamburguer-container">
      <img
        id="side-menu"
        ref="menu"
        for="side-menu"
        class="hamburguer"
        src="@/assets/svg/hamburguer.svg"
        alt="menu"
      />
    </label>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const menu = ref()

function closeMenu() {
  menu.value.click()
}
</script>

<style lang="scss">
.navbar {
  background-color: $grey;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
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
    font-weight: lighter;
    padding: 24px;
    gap: 24px;
    display: flex;
    justify-content: space-between;
    .link {
      text-decoration: none;
      font-size: 16px;
      padding: 0 8px;
      text-decoration: none;
      color: black;
      &:hover {
        color: grey;
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
@media (max-width: 600px) {
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
      grid-template-rows: repeat(2, max-content);
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
      .close-menu-container {
        padding: 16px;
        display: flex;
        justify-content: flex-end;
      }
      li {
        padding: 8px;
      }
    }
  }
}
</style>
