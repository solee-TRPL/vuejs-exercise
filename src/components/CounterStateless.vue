<script setup>
const { counter, nama, increment } = defineProps({
  counter: Number,
  nama: String,
  increment: Number,
});
const emits = defineEmits(["click"]);

function buttonClick() {
  emits("click", increment);
}
</script>

<template>
  <h1>Counter {{ nama }} : {{ counter }}</h1>
  <button @click="buttonClick">Increment {{ nama }}</button>
</template>

<style scoped></style>
