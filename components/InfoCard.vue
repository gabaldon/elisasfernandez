<template>
  <div class="info-container">
    <svg
      class="info-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8.66675V10.0001"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33317 6.00008C8.33317 6.18418 8.18393 6.33342 7.99984 6.33342C7.81574 6.33342 7.6665 6.18418 7.6665 6.00008C7.6665 5.81599 7.81574 5.66675 7.99984 5.66675C8.18393 5.66675 8.33317 5.81599 8.33317 6.00008Z"
        stroke="black"
      />
      <path
        d="M12.8332 8.00008C12.8332 10.6695 10.6692 12.8334 7.99984 12.8334C5.33046 12.8334 3.1665 10.6695 3.1665 8.00008C3.1665 5.3307 5.33046 3.16675 7.99984 3.16675C10.6692 3.16675 12.8332 5.3307 12.8332 8.00008Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <p>{{ text }}</p>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss">
.info-container {
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0 16px;
  background-color: $yellow-transparent;
  padding: 4px 16px;
  color: $black;
  font-size: 16px;
}
@media (max-width: 600px) {
  .info-icon {
    width: 32px;
  }
}
</style>
