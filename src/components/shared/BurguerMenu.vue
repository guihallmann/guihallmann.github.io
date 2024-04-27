<script setup>
import { RouterLink } from "vue-router";
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
      class="absolute top-12 right-4 bg-white border p-4 shadow-sm space-y-4 justify-between items-center flex flex-col"
    >
      <router-link to="/users" class="text-slate-800 font-medium"
        >Users</router-link
      >
      <router-link to="/posts" class="text-slate-800 font-medium"
        >Posts</router-link
      >
      <router-link to="/albums" class="text-slate-800 font-medium"
        >Albums</router-link
      >
    </div>
  </div>
</template>
