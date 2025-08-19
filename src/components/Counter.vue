<script setup>
import { nextTick, ref } from "vue";

let counter = ref({
  count: 0,
  nama: "Eko",
});

async function increment() {
  counter.value = {
    nama: counter.value.nama,
    count: counter.value.count + 1,
  };

  await nextTick();
  counter.value.count++;
  await nextTick();
  counter.value.count++;
  await nextTick();
  counter.value.count++;
  console.log("Counter incremented after nextTick:", counter.value.count);
}

function decrement() {
  if (counter.value.count > 0) {
    count = counter.value.count--;
  }
}

function reset() {
  counter.value = {
    count: (counter.value.count = 0),
    nama: "Eko",
  };
}
</script>

<template>
  <h2 id="counter">{{ `Counter ${counter.nama} : ${counter.count}` }}</h2>
  <button v-on:click="increment">Increment</button>
  <button v-on:click="decrement">Decrement</button>
  <button v-on:click="reset">Reset</button>
</template>

<style scoped></style>
