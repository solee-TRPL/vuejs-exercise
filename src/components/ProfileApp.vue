<script setup>
import { provide, reactive } from "vue";
import Profile from "./Profile.vue";
import ProfileAddress from "./ProfileAddress.vue";

const profile = reactive({
  name: "Eko",
  email: "ekokurniawankhannedy@gmail.com",
});

provide("profile", profile);
</script>

<template>
  <input v-model="profile.name" type="text" placeholder="nama" />
  <Profile />
  <ProfileAddress />
</template>

<style lang="scss" scoped></style>
