<script setup>
const props = defineProps({
  title: String,
  body: String,
});
</script>
<template>
  <section class="my-2 text-justify">
    <span class="text-slate-800 text-xl font-bold">{{ title }}</span>
    <p class="text-slate-800 text-md font-light">{{ body }}</p>
  </section>
</template>
