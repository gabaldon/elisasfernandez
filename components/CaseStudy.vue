<template>
  <object class="pdf" :data="pdfUrl" type="application/pdf">
    <p>
      Your web browser doesn't have a PDF plugin. Instead you can
      <a :href="pdfUrl"> click here to download the PDF file. </a>
    </p>
  </object>
</template>
<script setup lang="ts">
defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss">
.pdf {
  width: 100vw;
  height: 100vh;
}
</style>
