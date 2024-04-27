<script setup>
const props = defineProps({
  email: String,
  body: String,
});
</script>
<template>
  <section
    class="flex flex-col border border-dashed rounded-md text-justify p-4"
  >
    <span class="text-slate-800 text-sm font-medium"
      ><span class="text-indigo-600 font-bold">From:</span> {{ email }}</span
    >
    <span class="text-slate-800 text-md font-light text-justify">{{
      body
    }}</span>
  </section>
</template>
