<script setup>
import Layout from "../../components/shared/Layout.vue";
import { getAllUsers } from "../../api/users";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const users = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const fetchedUsers = await getAllUsers();
  users.value = fetchedUsers;
  isLoading.value = false;
});
</script>
<template>
  <Layout>
    <section class="container mx-auto max-w-4xl px-4 py-10 sm:py-20 sm:px-0">
      <p class="text-3xl font-bold text-slate-800 mb-4">{ Users list }</p>
      <div v-if="users" v-for="user in users">
        <router-link
          :to="{ name: 'user', params: { id: user.id } }"
          class="text-slate-800 text-xl font-light p-2"
          >{{ user.name }}</router-link
        >
      </div>
    </section>
  </Layout>
</template>
