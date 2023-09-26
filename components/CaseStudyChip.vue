<template>
  <div class="chip">
    <p class="text">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss">
.chip {
  background-color: #fffefd;
  border-radius: 16px;
  .text {
    color: #121f39;
    font-family: 'Avenir';
    font-size: 16px;
    padding: 4px 16px;
  }
}
</style>
