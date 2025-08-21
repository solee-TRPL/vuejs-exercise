<script setup>
const model = defineModel({
  type: Object,
  required: true,
  get: (value) => {
    value.email = value.email.toUpperCase();
    return value;
  },
});
</script>

<template>
  <h1>Contact Us</h1>
  <form>
    <div>
      <label for="name"
        >Nama:
        <input type="text" id="name" v-model="model.name" />
      </label>
      <br />
      <label for="email"
        >Email:
        <input type="email" id="email" v-model="model.email" />
      </label>
      <br />
      <label for="age"
        >Umur:
        <input type="number" id="age" v-model.number="model.age" />
      </label>
      <br />
      <label for="type"
        >Type:
        <select id="type" v-model="model.type">
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select>
      </label>
      <br />
      <label for="complain"
        >Complain:
        <input type="checkbox" id="complain" v-model="model.complain" />
      </label>
      <br />
      <label for="message"
        >Message:
        <textarea id="message" v-model="model.message"></textarea>
      </label>
      <br />
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
