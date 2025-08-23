import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        say_hello: "say-hello.html",
        style: "style.html",
        score: "score.html",
        todo_list: "todo-list.html",
        focus: "focus.html",
        contact: "contact.html",
        product: "product.html",
        note: "note.html",
        button: "button.html",
        home: "home.html",
        profile: "profile.html",
      },
    },
  },
});
