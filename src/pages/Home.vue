<script setup>
import Layout from "../components/shared/Layout.vue";
</script>
<template>
  <Layout>
    <section class="container mx-auto max-w-4xl px-4 py-10 sm:py-20 sm:px-0">
      <span class="text-6xl font-bold">Trabalho Prog. III</span>
      <p class="text-3xl font-normal mt-2">
        Feito utilizando
        <span class="text-yellow-400 font-bold">Javascript</span>,
        <span class="text-green-400 font-bold">Vue 3</span>
        e <span class="text-blue-500 font-bold">TailwindCSS</span>.
      </p>
      <p class="text-lg font-light mt-2">
        Dados consumidos da API {JSON} Placeholder
      </p>
      <a
        class="text-base mt-2 font-light hover:underline"
        href="https://jsonplaceholder.typicode.com/"
        >https://jsonplaceholder.typicode.com/</a
      >
    </section>
  </Layout>
</template>
