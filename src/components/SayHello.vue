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

function changeFirstName(event) {
  // person.firstName = document.getElementById('firstName').value;
  person.firstName = event.target.value; // agar memudahkan pengubahan parameter
}

function changeLastName(event) {
  // person.lastName = document.getElementById('lastName').value;
  person.lastName = event.target.value;;
}

</script>

<template>
  <div>
    <form>
      <button @click="counter++">increment {{ counter }}</button> <br>
      <input @input="changeFirstName" placeholder="First Name..." type="text" id="firstName" /> <br>
      <input @input="changeLastName" placeholder="Last Name..." type="text" id="lastName" /> <br>
      <button @click.prevent="sayHello">Say Hello</button> </br>
    </form>
  </div>
  <h1>Hello {{ fullName }}</h1>
</template>

<style scoped></style>
