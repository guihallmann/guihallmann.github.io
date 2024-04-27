<script setup>
import Layout from "../../components/shared/Layout.vue";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getUser } from "../../api/users";

const user = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedUser = await getUser(route.params.id);
  user.value = fetchedUser;
  isLoading.value = false;
});
</script>
<template>
  <Layout>
    <section class="container mx-auto max-w-4xl px-4 py-10 sm:py-20 sm:px-0">
      <div v-if="isLoading">
        <p class="text-3xl font-bold text-slate-800 animate-bounce">
          Loading...
        </p>
      </div>
      <div v-else>
        <p class="text-3xl font-bold text-slate-800 mb-4">
          { {{ user.name }} }
        </p>
        <p class="text-slate-800 text-xl font-light p-2">{{ user.email }}</p>
        <p class="text-slate-800 text-xl font-light p-2">
          {{ `${user.address.street}, ${user.address.city}` }}
        </p>
        <p class="text-slate-800 text-xl font-light p-2">{{ user.phone }}</p>
        <p class="text-slate-800 text-xl font-light p-2">{{ user.website }}</p>
        <p class="text-slate-800 text-xl font-light p-2">
          {{ user.company.name }}
        </p>
        <router-link
          :to="{ name: 'userPosts', params: { id: user.id } }"
          class="text-slate-800 text-xl font-medium p-2"
          >Posts 📰</router-link
        >
        <router-link
          :to="{ name: 'userAlbums', params: { id: user.id } }"
          class="text-slate-800 text-xl font-medium p-2"
          >Albums 📸</router-link
        >
        <router-link
          :to="{ name: 'userTodos', params: { id: user.id } }"
          class="text-slate-800 text-xl font-medium p-2"
          >Tasks ✔</router-link
        >
      </div>
    </section>
  </Layout>
</template>
