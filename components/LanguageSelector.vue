<!-- eslint-disable vue/no-v-html -->
<template>
  <VueSelect
    v-model="$i18n.locale"
    :options="languageOptions"
    :clearable="false"
    :filterable="false"
    :searchable="false"
    class="language-selector"
  >
    <template #selected-option-container="{ option }">
      <span class="vs__selected" v-html="iconMap[option.label]"></span>
    </template>

    <template #option="option">
      <div class="option">
        <span class="dropdown-items" v-html="iconMap[option.label]"></span>
        <span>{{ languageMap[option.label] }}</span>
      </div>
    </template>
  </VueSelect>
</template>
<script setup>
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { onMounted } from 'vue'
import SpFlag from '@/assets/svg/sp-flags.svg?raw'
import EEUUFlag from '@/assets/svg/flag-eeuu.svg?raw'
onMounted(() => {
  VueSelect.props.components.default = () => ({
    OpenIndicator: {
      render: (createElement) => createElement('span', '▼'),
    },
  })
})
const languageOptions = computed(() => ['en', 'es'])
const languageMap = computed(() => {
  return {
    en: 'English',
    es: 'Español',
  }
})
const iconMap = computed(() => {
  return {
    en: EEUUFlag,
    es: SpFlag,
  }
})
</script>

<style lang="scss">
.vs--open {
  .vs__open-indicator {
    transform: rotate(180deg) scale(0.5) !important;
  }
}
.language-selector {
  .option {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: flex-start;
    align-items: center;
    height: 48px;
  }
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: transparent;
    box-shadow: none;
    border: none;
    color: $black;
    min-width: max-content;
    border-radius: 16px;
    font-size: 16px;
    .dropdown-items {
      margin-right: 8px;
    }
  }
  .vs__dropdown-menu {
    width: 80px;
    position: absolute;
    top: 38px;
    left: -70px;
  }
  .vs__open-indicator {
    font-size: 8px;
  }
  .vs__dropdown-menu {
    background: $white;
  }

  .vs__dropdown-option {
    font-family: 'NeueMachina-Regular', sans-serif;
    color: $black;
  }

  .vs__dropdown-option--highlight {
    color: $black;
    background: $grey;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: $black;
    transform: scale(0.5);
    transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
    transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  }

  .image {
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .vs__selected {
    color: $black;
    font-family: 'NeueMachina-Regular', sans-serif;
    margin: 0;
    padding: 4px 0 0 0;
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &:hover {
    .vs__selected {
      color: $black;
    }
    .vs__open-indicator {
      color: $black;
    }
  }
  // remove extra space
  .vs__search {
    padding: 0 !important;
  }
}

// avoid decrease size on open
.vs--single.vs--open .vs__selected {
  opacity: 1 !important;
  position: inherit !important;
}

@media (max-width: 706px) {
  .language-selector {
    padding: 8px 8px;
    .vs__selected {
      width: 100px;
    }
    .vs__dropdown-menu {
      position: relative;
      top: -110px;
      left: -4px;
    }
  }
}
</style>
