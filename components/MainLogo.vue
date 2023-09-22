<template>
  <div class="logo-container">
    <h1 class="name">{{ $t('name') }}</h1>
    <svg
      class="background"
      width="33"
      height="26"
      viewBox="0 0 33 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0483 0.00541672C23.5906 -0.193154 30.6043 5.09539 32.6789 11.3242C34.4027 16.4996 28.9007 20.884 22.9853 23.8354C17.9675 26.339 11.597 26.8943 6.65262 24.3096C1.38388 21.5554 -1.12897 16.7402 0.483417 12.0726C2.49064 6.26193 7.06166 0.191069 15.0483 0.00541672Z"
        fill="#FEFF00"
      />
    </svg>
  </div>
</template>
<style scoped lang="scss">
.logo-container {
  position: absolute;
  display: flex;
}
.name {
  font-family: 'PPMori';
  padding: 24px;
  font-size: 16px;
  font-weight: normal;
  position: relative;
  z-index: 3;
  margin: 0;
}
.background {
  position: absolute;
  z-index: 1;
  left: 30px;
  top: 24px;
}
</style>
