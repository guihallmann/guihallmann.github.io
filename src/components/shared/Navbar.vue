<script setup>
import BurguerMenu from "./BurguerMenu.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="flex w-full justify-between items-center p-4 border-b">
    <router-link
      to="/"
      class="text-2xl font-bold text-slate-800 hover:text-slate-600 hover:animate-pulse"
      >TP3</router-link
    >
    <div class="hidden sm:flex sm:space-x-8">
      <router-link
        to="/users"
        class="text-slate-800 font-medium hover:underline"
        >Users</router-link
      >
      <router-link
        to="/posts"
        class="text-slate-800 font-medium hover:underline"
        >Posts</router-link
      >
      <router-link
        to="/albums"
        class="text-slate-800 font-medium hover:underline"
        >Albums</router-link
      >
      <router-link
        to="/photos"
        class="text-slate-800 font-medium hover:underline"
        >Photos</router-link
      >
      <router-link
        to="/todos"
        class="text-slate-800 font-medium hover:underline"
        >Tasks</router-link
      >
    </div>
    <div class="sm:hidden z-50">
      <BurguerMenu />
    </div>
  </nav>
</template>
