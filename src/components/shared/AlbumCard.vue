<script setup>
const props = defineProps({
  title: String,
});
</script>
<template>
  <section class="my-2 text-justify">
    <span class="text-slate-800 text-xl font-light">{{ title }}</span>
  </section>
</template>
