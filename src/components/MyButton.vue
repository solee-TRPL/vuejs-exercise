<script setup>
import { useAttrs } from "vue";

const attributes = useAttrs();
console.info(attributes);
</script>
<template>
  <button>My Button : {{ attributes.name }}</button>
</template>

<style lang="scss" scoped></style>
