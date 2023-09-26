<template>
  <div
    class="photos-container"
    @mousemove="updateCoordinates"
    @scroll="hideTitles"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="
        image.horizontal
          ? `img-container single-col cursor`
          : `img-container cursor`
      "
      @mousemove="image.text.show = true"
      @mouseleave="image.text.show = false"
    >
      <NuxtImg
        class="image"
        provider="cloudinary"
        :src="image.src"
        :alt="image.title"
        loading="lazy"
        sizes="sm:355px md:320px lg:800px"
        @click="showImage(image)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  images: {
    type: [Array, Object],
    required: true,
  },
})
const x = ref(0)
const y = ref(0)
const imageToShow = ref(null)

function showImage(image) {
  imageToShow.value = image
}

function updateCoordinates(event) {
  x.value = event.clientX + 20
  y.value = event.clientY
}
</script>

<style lang="scss" scoped>
.big-image-container {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.photos-container {
  display: grid;
  grid-template-columns: 17.5vw 17.5vw 17.5vw 17.5vw;
  justify-content: center;
  align-items: center;
  column-gap: 0.5vw;
  row-gap: 0.5vw;
  margin-bottom: 1vw;
  .image {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  .title {
    position: fixed;
    z-index: 1;
    background: $yellow;
    color: $black;
    margin: 0;
    padding: 0;
    font-weight: bolder;
    line-height: 1;
    background: $yellow;
    padding-top: 0.1vw;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &:last-of-type {
      margin-bottom: 0px;
    }
    &.single-col {
      grid-column: auto / span 2;
    }
  }
}
@media (min-width: 2400px) {
  .photos-container {
    grid-template-columns: 7.5vw 7.5vw 7.5vw 7.5vw;
  }
}
@media (max-width: 1024px) {
  .photos-container {
    grid-template-columns: 27.5vw 27.5vw 27.5vw;
    .title {
      font-size: 16px;
      padding-top: 1px;
    }
    .img-container {
      &:last-of-type {
        grid-column: auto / span 3;
      }
    }
  }
}
</style>
