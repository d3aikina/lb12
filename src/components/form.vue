<script setup>
import { ref } from 'vue';
import { useFormStore } from '@/store/form';

const formStore = useFormStore();
const formData = ref({
  date: '',
  time: '',
  userId: 1,
});

const submitForm = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',  {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(formData.value),
    });
    formStore.response = await res.json();
  } catch (err) {
    formStore.response = { error: 'Ошибка отправки формы' };
  }
};
</script>

<template>
  <div>
    <h1>Форма отправки</h1>
    <form @submit.prevent="submitForm">
      <input type="date" v-model="formData.date" required />
      <input type="time" v-model="formData.time" required></input>
      <button type="submit">Отправить</button>
    </form>
    <pre v-if="formStore.response">{{ formStore.response }}</pre>
  </div>
</template>