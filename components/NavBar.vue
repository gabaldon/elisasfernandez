<template>
  <header class="navbar">
    <h1 class="name">{{ this.$t('name') }}</h1>
    <input id="side-menu" class="checkbox" type="checkbox" />
    <nav class="navbar-tabs">
      <ul class="navbar-links">
        <li>
          <a
            class="link"
            target="_blank"
            href="mailto:elisasanchezfernandez@gmail.com"
            >{{ this.$t('contact') }}</a
          >
        </li>
        <li>
          <a
            class="link"
            target="_blank"
            href="https://www.linkedin.com/in/elisasanchezfernandez/"
            >{{ this.$t('cv') }}</a
          >
        </li>
      </ul>
    </nav>
    <label for="side-menu" class="hamburguer-container">
      <img
        id="side-menu"
        for="side-menu"
        class="hamburguer"
        src="@/assets/svg/hamburguer.svg"
        alt="menu"
      />
    </label>
  </header>
</template>

<style lang="scss">
.navbar {
  background-color: $grey;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 500;
  .name {
    padding: 24px;
    font-size: 16px;
    margin: 0;
  }
  .checkbox {
    display: none;
  }
  .navbar-links {
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
      display: none;
    }
    .checkbox:checked ~ .navbar-tabs {
      display: block;
      padding: 16px;
      opacity: 1;
      height: 50px;
    }
    .hamburguer-container {
      display: block;
    }
    .navbar-links {
      position: absolute;
      top: 64px;
      width: 100vw;
      z-index: 500;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: white;
      height: 0px;
      opacity: 1;
      transition: all 0.75s ease;
      .link {
        padding: 16px;
      }
    }
  }
}
</style>
