<script setup>
const items = [
  { id: 1, text: "Deploy Flutter", done: false },
  { id: 2, text: "Deploy Vue 3", done: true },
  { id: 3, text: "Deploy React", done: true },
  { id: 4, text: "Deploy Laravel", done: false },
  { id: 5, text: "Deploy Javascript", done: false },
  { id: 6, text: "Deploy PHP", done: true },
  { id: 7, text: "Deploy Liveware", done: false },
];
</script>

<template>
  <h1>List Items</h1>
  <!-- Jika ada v-if dan v-for dalam satu element maka v-if akan di prioritaskan -->
  <!-- tag template tidak akan menjadi element pada DOM -->
  <template v-for="item in items">
    <ul v-bind:key="item.id" v-if="!item.done">
      <li v-for="(value, key) in item" v-bind:key="key">{{ key }}: {{ value }}</li>
    </ul>
  </template>

  <h1 v-for="i in 10">Hello {{ i }}</h1>
</template>

<style scoped></style>
