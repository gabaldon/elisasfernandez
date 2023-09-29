<template>
  <div class="next-project-btns">
    <NuxtLink :to="url" rel="next-project">
      <CustomButton :type="type">{{ $t('next-project') }}</CustomButton>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss" scoped>
.next-project-btns {
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
  position: relative;
  right: 24px;
  bottom: 32px;
  gap: 16px;
  justify-content: flex-end;
}
</style>
