<script setup>
import { ref } from "vue";

const props = defineProps(["nama", "initialCount"]);

let counter = ref({
  count: Number(props.initialCount),
  nama: "Eko",
});

async function increment() {
  if (counter.value.count < 100) {
    counter.value = {
      nama: counter.value.nama,
      count: counter.value.count + 5,
    };
    console.log("Counter incremented after nextTick:", counter.value.count);
  }
}

function decrement() {
  if (counter.value.count > 0) {
    counter.value = {
      nama: counter.value.nama,
      count: counter.value.count - 5,
    };
    console.log("Counter incremented after nextTick:", counter.value.count);
  }
}

function reset() {
  counter.value = {
    count: (counter.value.count = 0),
    nama: "Eko",
  };
  console.log("Counter incremented after nextTick and reset");
}
</script>

<template>
  <h2 id="counter">{{ `Counter ${props.nama} : ${counter.count}` }}</h2>
  <button v-on:click="increment">Increment</button>
  <button v-on:click="decrement">Decrement</button>
  <button v-on:click="reset">Reset</button>
</template>

<style scoped></style>
