<script setup>
const props = defineProps({
  title: String,
  route: String,
});
</script>
<template>
  <li class="list-none">
    <a
      class="font-medium text-slate-800 hover:text-slate-600 hover:animate-pulse"
      :href="route"
      >{{ title }}</a
    >
  </li>
</template>
