<template>
  <div class="prototype-container">
    <CustomSwitch
      :options="['Video', 'Figma']"
      :selected-option="selectedOption"
      @change="updatePrototypeView"
    />
    <NuxtLink class="floating-btn" :to="nextProjectUrl">
      <CustomButton type="primary">{{ $t('next-project') }}</CustomButton>
    </NuxtLink>
    <InfoCard v-if="selectedOption == 'Figma'" :text="$t('figma-info')" />
    <iframe
      v-if="selectedOption == 'Figma'"
      class="prototype"
      :src="figmaUrl"
      allowfullscreen
    ></iframe>
    <video v-else controls autoplay :src="videoUrl" class="prototype"></video>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectedOption = ref('Video')
defineProps({
  figmaUrl: {
    type: String,
    required: true,
  },
  nextProjectUrl: {
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
  margin-top: 32px;
  margin-bottom: 32px;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  row-gap: 24px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  .prototype {
    align-self: center;
    width: 50vw;
    height: 74vh;
  }
}
@media (max-width: 600px) {
  .prototype-container {
    display: grid;
    align-items: flex-start;
    .floating-btn {
      display: none;
    }
    .prototype {
      width: 80vw;
      height: 74vh;
    }
  }
}
</style>
