<script setup>
import Navbar from "./Navbar.vue";
</script>
<template>
  <section class="flex flex-col h-screen">
    <header>
      <Navbar />
    </header>
    <section class="flex-1 overflow-y-auto">
      <slot />
    </section>
    <footer class="flex justify-center items-center border-t h-10">
      <p class="text-sm font-light">
        Made by <span class="font-medium">Guilherme Hallmann</span> &
        <span class="font-medium">Paulo Henz</span>, 2024.
      </p>
    </footer>
  </section>
</template>
