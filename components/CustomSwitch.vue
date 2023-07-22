<template>
  <div class="switch-container">
    <div
      v-for="option in options"
      :key="option"
      class="option"
      :class="{ selected: option == selectedOption }"
      @click="selectOption(option)"
    >
      <p>{{ option }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['change'])
defineProps({
  options: {
    type: Array<string>,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
})
function selectOption(option: String) {
  emit('change', option)
}
</script>

<style lang="scss" scoped>
.switch-container {
  width: max-content;
  display: grid;
  grid-template-columns: max-content max-content;
  border: 2px solid $yellow;
  border-radius: 24px;
  .option {
    cursor: pointer;
    margin: 4px;
    padding: 8px;
    border-radius: 24px;
    background-color: $white;
    color: $black;
  }
  .selected {
    background-color: $black;
    color: $white;
  }
}
</style>
