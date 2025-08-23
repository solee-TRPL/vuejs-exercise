<script setup>
import { ref, useSlots } from "vue";

const counter = ref(0);
</script>

<template>
  <div v-if="$slots.header">
    <slot name="header" :counter="counter">
      <h1>Header</h1>
    </slot>
  </div>
  <div v-if="$slots.default">
    <slot name="default" :counter="counter">
      <p>Default content</p>
    </slot>
  </div>
  <div v-if="$slots.footer">
    <slot name="footer" :counter="counter">
      <p>Footer</p>
    </slot>
  </div>
  <button @click="counter++">increment</button>
</template>

<style lang="scss" scoped></style>
