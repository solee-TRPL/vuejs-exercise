<script setup>
const items = [
  { id: 1, text: "Learn Vue.js", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
  { id: 3, text: "Deploy the Mathematic App", completed: false },
  { id: 4, text: "Deploy the Psychology App", completed: false },
  { id: 5, text: "Deploy the Technology App", completed: false },
  { id: 6, text: "Deploy the Biology App", completed: false },
  { id: 7, text: "Deploy the Religion App", completed: false },
];
</script>

<template>
  <div>ToDo List</div>
  <ul v-for="item in items">
    <li v-for="(value, key) in item">{{ key }} : {{ value }}</li>
  </ul>
</template>

<style scoped></style>
