<script setup>
import { reactive } from "vue";

const contact = reactive({
  name: "",
  email: "",
  age: 0,
  type: "Reguler",
  complain: false,
  message: "",
});
</script>

<template>
  <h1>Contact Us</h1>
  <form>
    <div>
      <label for="name"
        >Nama:
        <input type="text" id="name" v-model="contact.name" />
      </label>
      <br />
      <label for="email"
        >Email:
        <input type="email" id="email" v-model="contact.email" />
      </label>
      <br />
      <label for="age"
        >Umur:
        <input type="number" id="age" v-model.number="contact.age" />
      </label>
      <br />
      <label for="type"
        >Type:
        <select id="type" v-model="contact.type">
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select>
      </label>
      <br />
      <label for="complain"
        >Complain:
        <input type="checkbox" id="complain" v-model="contact.complain" />
      </label>
      <br />
      <label for="message"
        >Message:
        <textarea id="message" v-model="contact.message"></textarea>
      </label>
      <br />
    </div>
  </form>

  <br />

  <h1>Contact Preview</h1>
  <div>
    <p>Nama: {{ contact.name }}</p>
    <p>Email: {{ contact.email }}</p>
    <p>Age: {{ contact.age }}</p>
    <p>Type: {{ contact.type }}</p>
    <p>Complain: {{ contact.complain }}</p>
    <p>Message: {{ contact.message }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
