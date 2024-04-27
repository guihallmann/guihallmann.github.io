<script setup>
import Navlink from "./Navlink.vue";
import { ref } from "vue";
const isBurgerMenuOpen = ref(false);
</script>

<template>
  <div>
    <button
      @click="isBurgerMenuOpen = !isBurgerMenuOpen"
      class="text-slate-800 text-xl font-medium"
    >
      ☰
    </button>
    <div
      v-if="isBurgerMenuOpen"
      class="absolute top-12 right-4 bg-slate-50/90 border p-4 shadow-sm space-y-4 justify-between items-center flex flex-col"
    >
      <Navlink title="Users" route="/users" />
      <Navlink title="Posts" route="/posts" />
      <Navlink title="Albums" route="/albums" />
      <Navlink title="Photos" route="/photos" />
      <Navlink title="Todos" route="/todos" />
    </div>
  </div>
</template>
