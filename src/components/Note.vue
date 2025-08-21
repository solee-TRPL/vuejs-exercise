<script setup>
import { onBeforeMount, onMounted, onUpdated, reactive, ref, useTemplateRef } from "vue";

const notes = reactive([]);
const note = ref("");
const noteInput = useTemplateRef("noteInput");
const noteList = useTemplateRef("noteList");

function addNote() {
  notes.push(note.value);
  note.value = "";
  noteInput.value.focus;
  if (noteList.value) {
    noteList.value.forEach((li) => {
      console.info(li.textContent);
    });
  }
}

onBeforeMount(() => {
  console.info("onBeforeMount");
});

onMounted(() => {
  console.info("onMounted");
});

onUpdated(() => {
  console.info("onUpdated");
});
</script>
<template>
  <h1>Tambah Note</h1>
  <input ref="noteInput" type="text" v-model="note" placeholder="Tulis disini..." />
  <button @click="addNote">Add Note</button>
  <h1>Daftar Note</h1>
  <div>
    <ul>
      <li v-for="note in notes" ref="noteList">
        {{ note }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
