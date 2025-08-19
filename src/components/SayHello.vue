<script setup>
import { computed, reactive, ref } from "vue";

const person = reactive({
  firstName: "",
  lastName: "",
});

const fullName = computed((oldName) => {    
    console.info(`Change old name: ${oldName}`);
    return `${person.firstName} ${person.lastName}`;
});

function sayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

let counter = ref(0);

function increment() {
    console.info("Increment Called");
    counter.value++;
}

</script>

<template>
  <div>
    <button v-on:click="increment">increment {{ counter }}</button> <br>
    <input placeholder="First Name..." type="text" id="firstName" /> <br>
    <input placeholder="Last Name..." type="text" id="lastName" /> <br>
    <button v-on:click="sayHello">Say Hello</button> </br>
  </div>
  <h1>Hello {{ fullName }}</h1>
</template>

<style scoped></style>
