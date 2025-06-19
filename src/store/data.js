import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: [],
    loading: false,
    error: null,
  }),
});