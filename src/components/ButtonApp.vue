<script setup>
import Container from "./Container.vue";
import MyButton from "./MyButton.vue";

function clickHandler() {
  alert("Button di klik");
}
</script>
<template>
  <Container>
    <template #header="attributes">
      <h1>Button App {{ attributes.counter }}</h1>
    </template>
    <template v-slot:default="attributes">
      <p>Hallo everyone, I am sole and i dreaming i will traveling around world</p>
      <MyButton class="button" @click="clickHandler" :name="attributes.counter" />
    </template>
    <template #footer>
      <p>Copyright 2025 @Programmerzamannow</p>
    </template>
  </Container>
</template>

<style scoped>
.button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
