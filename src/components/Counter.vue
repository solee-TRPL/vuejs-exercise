<script setup>
import { ref } from "vue";

let count = ref(0);

function increment() {
  if (count.value < 10) {
    count.value++;
  }
}

function decrement() {
  if (count.value > 0) {
    count.value--;
  }
}

function reset() {
  count.value = 0;
}
</script>

<template>
  <h2 id="counter">{{ `Counter : ${count}` }}</h2>
  <button v-on:click="increment">Increment</button>
  <button v-on:click="decrement">Decrement</button>
  <button v-on:click="reset">Reset</button>
</template>

<style scoped></style>
