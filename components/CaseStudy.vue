<template>
  <div class="case-study-container">
    <div class="floating-btn">
      <NuxtLink :to="prototypeUrl">
        <CustomButton type="primary">{{ $t('prototype') }}</CustomButton>
      </NuxtLink>
      <NuxtLink :to="nextProjectUrl">
        <CustomButton type="with-border">{{ $t('next-project') }}</CustomButton>
      </NuxtLink>
    </div>
    <object class="pdf" :data="pdfUrl" type="application/pdf">
      <p>
        Your web browser doesn't have a PDF plugin. Instead you can
        <a :href="pdfUrl" aria-label="click here to download the PDF file">
          click here to download the PDF file.
        </a>
      </p>
    </object>
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
