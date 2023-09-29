<template>
  <div class="case-study-container">
    <div class="floating-btn">
      <NuxtLink :to="prototypeUrl" rel="prototype">
        <CustomButton type="primary">{{ $t('prototype') }}</CustomButton>
      </NuxtLink>
      <NuxtLink :to="nextProjectUrl" rel="next-project">
        <CustomButton type="with-border">{{ $t('next-project') }}</CustomButton>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
  nextProjectUrl: {
    type: String,
    required: true,
  },
  prototypeUrl: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.case-study-container {
  display: grid;
  justify-content: center;
  align-items: center;
  .floating-btn {
    display: flex;
    gap: 16px;
  }
  .pdf {
    width: 80vw;
    height: 100vh;
    margin: 90px 0;
  }
}
</style>
