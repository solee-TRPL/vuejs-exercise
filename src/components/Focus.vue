<template>
  <div class="todo-app">
    <h2>📝 To-do List</h2>

    <!-- Input tambah to-do -->
    <form class="todo-form" @submit.prevent="addTodo">
      <input v-model="newTodo" class="todo-input" placeholder="Tambah tugas baru..." />
      <button type="submit" class="add-button">Tambah</button>
    </form>

    <!-- Tombol filter -->
    <div class="filters">
      <button v-for="type in filterTypes" :key="type.value" @click="setFilter(type.value)" :class="{ active: filter === type.value }">
        {{ type.label }}
      </button>
    </div>

    <!-- Daftar to-do -->
    <ul class="todo-list">
      <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item" :class="{ completed: todo.done }">
        <label class="todo-label">
          <input type="checkbox" v-model="todo.done" />
          <span>{{ todo.text }}</span>
        </label>
        <button class="delete-button" @click="removeTodo(todo.id)">❌</button>
      </li>
    </ul>

    <!-- Status -->
    <p class="status" v-if="remainingCount === 0">✅ Semua selesai!</p>
    <p class="status" v-else>{{ remainingCount }} tugas tersisa</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newTodo = ref("");
const todos = ref([]);

const filter = ref("all");

const filterTypes = [
  { label: "Semua", value: "all" },
  { label: "Selesai", value: "done" },
  { label: "Belum Selesai", value: "not-done" },
];

function addTodo() {
  if (!newTodo.value.trim()) return;

  todos.value.push({
    id: Date.now(),
    text: newTodo.value.trim(),
    done: false,
  });

  newTodo.value = "";
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function setFilter(type) {
  filter.value = type;
}

const remainingCount = computed(() => todos.value.filter((todo) => !todo.done).length);

const filteredTodos = computed(() => {
  if (filter.value === "done") return todos.value.filter((t) => t.done);
  if (filter.value === "not-done") return todos.value.filter((t) => !t.done);
  return todos.value;
});
</script>

<style lang="scss" scoped>
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 25px;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", sans-serif;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.add-button {
  padding: 10px 20px;
  background-color: #28a745;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #218838;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filters button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
}

.filters button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.filters button:hover:not(.active) {
  background-color: #f1f1f1;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid #e0e0e0;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #f6f6f6;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.delete-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #dc3545;
  transition: color 0.3s;
}

.delete-button:hover {
  color: #a71d2a;
}

.status {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #555;
}
</style>
