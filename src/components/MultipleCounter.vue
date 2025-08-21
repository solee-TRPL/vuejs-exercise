<script setup>
import { ref } from "vue";
import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";

const counter1 = "Eko Kurniawan";
const counter2 = "Budi Nugraha";

const counter = ref(0);

function increment(value) {
  counter.value += value;
}
</script>

<template>
  <Counter :nama="counter1" initial-count="10" />
  <Counter v-bind:nama="counter2" initial-count="20" />

  <CounterStateless nama="joko" :counter="counter" :increment="1" @click="increment" />
  <CounterStateless nama="morro" :counter="counter" :increment="2" @click="increment" />
</template>

<style scoped></style>
