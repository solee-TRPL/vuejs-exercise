<script setup>
import { ref } from "vue";

const score = ref(0);
</script>

<template>
  <h1>Score App</h1>

  <input type="number" v-model="score" placeholder="Enter your score" />

  <div v-show="score !== 0">
    <p>{{ `Your score is ${score}` }}</p>
  </div>
  <div v-if="score >= 90">
    <p>{{ `Great job! your score is ${score}` }}</p>
  </div>
  <div v-else-if="score >= 75">
    <p>{{ `Good score! your score is ${score}` }}</p>
  </div>
  <div v-else>
    <p>{{ `You failed! your score is ${score}` }}</p>
  </div>
</template>

<style scoped></style>
