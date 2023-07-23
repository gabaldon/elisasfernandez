<template>
  <NuxtLayout>
    <object
      class="pdf"
      data="/pdf/blablacar-case-study.pdf"
      type="application/pdf"
    >
      <p>
        Your web browser doesn't have a PDF plugin. Instead you can
        <a href="filename.pdf">click here to download the PDF file.</a>
      </p>
    </object>
  </NuxtLayout>
</template>
<style lang="scss">
.pdf {
  width: 100vw;
  height: 100vh;
}
</style>
