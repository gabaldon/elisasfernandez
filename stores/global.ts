import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    showPhotos: false,
  }),
})
