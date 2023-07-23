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
        class="prototype"
        :src="figmaUrl"
        allowfullscreen
      ></iframe>
      <video v-else controls autoplay :src="videoUrl" class="prototype"></video>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectedOption = ref('Video')
defineProps({
  figmaUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
})
function updatePrototypeView(option: string) {
  selectedOption.value = option
}
</script>
<style lang="scss" scoped>
.prototype-container {
  margin-top: 24px;
  margin-bottom: 32px;
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
