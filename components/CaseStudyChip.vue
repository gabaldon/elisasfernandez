<template>
  <div class="chip" :style="{ 'background-color': color, color: textColor }">
    <p class="text">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#fffefd',
  },
  textColor: {
    type: String,
    default: '#121f39',
  },
})
</script>
<style lang="scss">
.chip {
  border-radius: 16px;
  .text {
    font-family: 'Avenir';
    font-size: 16px;
    padding: 4px 16px;
  }
}
</style>
