<script setup>
import { onMounted } from 'vue';
import { useDataStore } from '@/store/data';

const dataStore = useDataStore();

onMounted(async () => {
  dataStore.loading = true;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    dataStore.data = await res.json();
  } catch (err) {
    dataStore.error = 'Ошибка загрузки данных';
  } finally {
    dataStore.loading = false;
  }
});
</script>

<template>
  <div>
    <h1>Данные с API</h1>
    <div v-if="dataStore.loading">Загрузка...</div>
    <div v-else-if="dataStore.error">{{ dataStore.error }}</div>
    <ul v-else>
      <li v-for="item in dataStore.data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>