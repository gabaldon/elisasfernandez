<template>
  <NuxtLayout>
    <div class="prototype-container">
      <CustomSwitch
        :options="['Video', 'Figma']"
        :selected-option="selectedOption"
        @change="updatePrototypeView"
      />
      <iframe
        v-if="selectedOption == 'Figma'"
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        class="prototype"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5h6iliXDwj9YNDzzLjfHdt%2FTop-Choice%3Fpage-id%3D761%253A65170%26type%3Ddesign%26node-id%3D761-66819%26viewport%3D165%252C370%252C0.07%26t%3DhMB53LGAhTHcZGeh-1%26scaling%3Dscale-down%26starting-point-node-id%3D761%253A66819%26mode%3Ddesign"
        allowfullscreen
      ></iframe>
      <video
        v-else
        controls
        autoplay
        src="https://res.cloudinary.com/dpgwm1ztw/video/upload/v1690057243/top-choice-prototype_pi1xox.mov"
        class="prototype"
      ></video>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectedOption = ref('Video')
function updatePrototypeView(option: string) {
  selectedOption.value = option
}
</script>
<style lang="scss" scoped>
.prototype-container {
  margin-top: 34px;
  margin-bottom: 34px;
  display: grid;
  row-gap: 24px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  .prototype {
    width: 100vw;
    height: 80vh;
  }
}
</style>
