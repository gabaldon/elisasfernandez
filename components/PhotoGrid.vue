<template>
  <div class="photos-container" @mousemove="updateCoordinates">
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
      <p
        v-show="image.text.show"
        class="title"
        :style="{ top: y + 'px', left: x + 'px' }"
      >
        {{ image.text.title }}
      </p>
      <NuxtImg
        provider="cloudinary"
        :src="image.src"
        loading="lazy"
        sizes="sm:355px md:320px lg:480px"
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

function updateCoordinates(event) {
  x.value = event.clientX + 20
  y.value = event.clientY
}
</script>

<style lang="scss" scoped>
.photos-container {
  display: grid;
  grid-template-columns: 17.5vw 17.5vw 17.5vw 17.5vw;
  justify-content: center;
  align-items: center;
  column-gap: 0.5vw;
  row-gap: 0.5vw;
  margin-bottom: 1vw;
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
  .cursor {
    cursor: none;
  }
  .img-container {
    &:last-of-type {
      margin-bottom: 0px;
    }
    &.single-col {
      grid-column: auto / span 2;
    }
  }
}
@media (max-width: 1024px) {
  .photos-container {
    grid-template-columns: 1fr;
    .img-container {
      grid-column: auto / span 2;
      margin: 0px;
    }
    .title {
      font-size: 16px;
      padding-top: 1px;
    }
  }
}
</style>
