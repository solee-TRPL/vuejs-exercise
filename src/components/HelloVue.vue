<script setup>
console.info("Hello Vue");

const hello = "<h1>Hello Vue</h1>";
const data = {
  class: "hello",
  id: "hello",
};
const buttonDisabled = false;

const name = "John";

function helloFunction(name) {
  return `Hello ${name}`;
}
</script>

<template>
  <h1 v-bind="data">{{ hello.toUpperCase() }}</h1>

  <h2>{{ 100 + 200 }}</h2>

  <h2>{{ helloFunction(name) }}</h2>

  <div v-bind:class="data.id" v-html="hello"></div>

  <button :disabled="buttonDisabled">This is Button</button>
</template>

<style scoped>
.hello {
  color: green;
}

#hello {
  font-style: italic;
}
</style>
