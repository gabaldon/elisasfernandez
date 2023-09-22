<template>
  <video
    class="video-autoplay"
    loop="true"
    muted
    defaultMuted
    playsinline
    oncontextmenu="return false;"
    preload="auto"
    autoplay
    :src="url"
  ></video>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss">
.video-autoplay {
  width: 23vw;
}
@media (max-width: 600px) {
  .video-autoplay {
    width: 50vw;
  }
}
</style>
