<template>
  <div class="card-background" :style="backgroundColor">
    <img
      class="image image-smallscreen"
      :src="mockupUrl"
      alt="Top choice mockup"
    />
    <img
      v-if="mockupPosition == 'left'"
      class="image image-bigscreen"
      :src="mockupUrl"
      alt="Top choice mockup"
    />
    <div class="project-card-container">
      <SvgIcon class="title" :name="title" />
      <p class="description">{{ $t(description) }}</p>
      <div class="btns-container">
        <NuxtLink :to="prototypeLink">
          <CustomButton :type="'primary'">{{ $t('prototype') }}</CustomButton>
        </NuxtLink>
        <NuxtLink v-if="isDesktop" :to="caseStudyLink">
          <CustomButton type="secondary">{{ $t('case-study') }}</CustomButton>
        </NuxtLink>
        <a v-else target="_blank" :href="behanceLink">
          <CustomButton type="secondary">{{ $t('case-study') }}</CustomButton>
        </a>
      </div>
    </div>
    <img
      v-if="mockupPosition == 'right'"
      class="image image-bigscreen"
      :src="mockupUrl"
      alt="Top choice mockup"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const isDesktop = computed(() => {
  const platform = navigator.platform.toLowerCase()
  return /mac|macintel|win|linux/i.test(platform)
})

const props = defineProps({
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

const mockupUrl = computed(() => {
  return new URL(`/assets/png/${props.mockup}.png`, import.meta.url)
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
