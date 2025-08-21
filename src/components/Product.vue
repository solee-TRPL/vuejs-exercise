<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from "vue";

const productId = ref("product1");
const product = ref(null);

// default dari watch() adalah lazy, jadi dia baru akan di jalankan ketika ada perubahan
// watch(
//   productId,
//   async (newVal, oldVal) => {
//     console.info("Call watch callback");
//     const response = await fetch(`/${newVal}.json`);
//     product.value = await response.json();
//   },
//   {
//     immediate: true, // untuk membuat product1 dipanggil saat pertama kali
//     // once: true, // untuk membuat sesuatu yang sudah melakukan perubahan tidak bisa melakukan perubahan lagi
//   }
// );

// watchEffect()
watchEffect(async () => {
  onWatcherCleanup(() => {
    // untuk membersikan wacther sebelum perubahan berikutnya
    // dan onWatcherCleanup ini tidak mendukung async
    console.info("Clean up!");
  });

  console.info("Call watch callback");
  const response = await fetch(`/${productId.value}.json`);
  product.value = await response.json();
});
</script>

<template>
  <label for="productId"
    >Product Id :
    <select name="productId" id="productId" v-model="productId">
      <option value=""></option>
      <option value="product1">Product 1</option>
      <option value="product2">Product 2</option>
      <option value="product3">Product 3</option>
    </select>
  </label>

  <div v-if="product">
    <h1>Product :</h1>
    <p>Id : {{ product.id }}</p>
    <p>Nama : {{ product.name }}</p>
    <p>Harga : {{ product.price }}</p>
  </div>
</template>

<style scoped></style>
