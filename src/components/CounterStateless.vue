<script setup>
const { counter, nama, increment } = defineProps({
  counter: Number,
  nama: String,
  increment: Number,
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <h1>Counter {{ nama }} : {{ counter }}</h1>
  <button @click.stop="$emit('click', increment)">Increment {{ nama }}</button>
</template>

<style scoped></style>
