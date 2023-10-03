<template>
  <div>
    <div ref="content" class="container">
      <div v-if="isIntersecting" class="intersecting">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const content = ref('')
const isIntersecting = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-delay')
          isIntersecting.value = true
        }
      })
    },
    {
      threshold: 0.5,
    }
  )

  if (content.value) {
    observer.observe(content.value)
  }
})
</script>

<style scoped>
.container {
  min-height: 23vw;
}
.intersecting {
  display: grid;
  justify-content: center;
}
.animate-delay {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}

.content {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}
</style>
