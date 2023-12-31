<template>
  <div class="card-background" :style="backgroundColor">
    <NuxtImg
      provider="cloudinary"
      class="image image-smallscreen"
      :alt="`mockup ${description}`"
      :src="mockup"
      width="600"
      height="415"
      sizes="sm:355px md:420px lg:1200px"
    />
    <NuxtImg
      v-if="mockupPosition == 'left'"
      provider="cloudinary"
      class="image image-bigscreen"
      :alt="`mockup ${description}`"
      :src="mockup"
      width="600"
      height="415"
      sizes="sm:355px md:420px lg:1200px"
    />
    <div class="project-card-container">
      <SvgIcon class="title" :name="title" />
      <p class="description">{{ $t(description) }}</p>
      <div class="btns-container">
        <NuxtLink v-if="showPrototype" :to="prototypeLink" rel="prototype">
          <CustomButton :type="'secondary'">{{ $t('prototype') }}</CustomButton>
        </NuxtLink>
        <NuxtLink v-if="!showBehance" :to="caseStudyLink" rel="case-study">
          <CustomButton type="primary">{{ $t('case-study') }}</CustomButton>
        </NuxtLink>
        <a
          v-else
          target="_blank"
          :href="behanceLink"
          aria-label="Go to the Behance profile"
        >
          <CustomButton type="primary">{{
            primaryBtnText ?? $t('case-study')
          }}</CustomButton>
        </a>
      </div>
    </div>
    <NuxtImg
      v-if="mockupPosition == 'right'"
      provider="cloudinary"
      class="image image-bigscreen"
      :alt="`mockup ${description}`"
      :src="mockup"
      width="600"
      height="415"
      sizes="sm:355px md:420px lg:1200px"
    />
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
const isDesktop = ref(false)
onBeforeMount(() => {
  const platform = navigator.platform.toLowerCase()
  isDesktop.value = /mac|macintel|win|linux/i.test(platform)
})

const props = defineProps({
  showBehance: {
    type: Boolean,
    default: true,
  },
  showPrototype: {
    type: Boolean,
    default: true,
  },
  primaryBtnText: {
    type: String,
    default: null,
  },
  mockupPosition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  behanceLink: {
    type: String,
    required: true,
  },
  caseStudyLink: {
    type: String,
    required: true,
  },
  prototypeLink: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  mockup: {
    type: String,
    required: true,
  },
})

const backgroundColor = computed(() => {
  return {
    '--bg-color': props.bgColor,
    '--text-color': props.textColor,
  }
})
</script>

<style lang="scss" scoped>
.image {
  width: 600px;
  max-width: 80vw;
}
.image-bigscreen {
  display: block;
}
.image-smallscreen {
  display: none;
}
.card-background {
  padding: 60px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  align-items: center;
  background-color: var(--bg-color);
  .title {
    max-width: 80vw;
  }
  .description {
    font-weight: 500;
  }
  .project-card-container {
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(3, max-content);
    align-items: center;
    row-gap: 8px;
    text-align: center;
    color: var(--text-color);
    font-size: 16px;
    font-weight: lighter;
    .btns-container {
      margin-top: 32px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, max-content);
      grid-gap: 16px;
    }
  }
}
@media (max-width: 1200px) {
  .image-bigscreen {
    display: none;
  }
  .image-smallscreen {
    display: block;
  }
  .project-card-container {
    margin-top: 32px;
  }
}
@media (max-width: 600px) {
  .card-background {
    padding: 32px 16px;
    margin: 16px;
    border-radius: 24px;
    gap: 24px;
    .project-card-container {
      .top-choice-icon {
        max-width: 80vw;
      }
      .btns-container {
        margin-top: 16px;
        grid-template-columns: 1fr;
        justify-items: center;
        .btn {
          width: max-content;
        }
      }
    }
  }
}
</style>
