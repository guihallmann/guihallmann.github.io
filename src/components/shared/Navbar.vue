<script setup>
import BurguerMenu from "./BurguerMenu.vue";
import Navlink from "./Navlink.vue";
</script>
<template>
  <nav class="flex w-full justify-between items-center p-4 border-b">
    <a
      class="text-2xl font-bold text-slate-800 hover:text-slate-600 hover:animate-pulse"
      href="/"
      >TP3</a
    >
    <div class="hidden sm:flex sm:space-x-8">
      <Navlink title="Users" route="/users" />
      <Navlink title="Posts" route="/posts" />
      <Navlink title="Albums" route="/albums" />
      <Navlink title="Photos" route="/photos" />
      <Navlink title="Todos" route="/todos" />
    </div>
    <div class="sm:hidden z-50">
      <BurguerMenu />
    </div>
  </nav>
</template>
