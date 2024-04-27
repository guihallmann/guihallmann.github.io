<script setup>
import Layout from "../../components/shared/Layout.vue";
import { getAllAlbums } from "../../api/albums";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const albums = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const fetchedAlbums = await getAllAlbums();
  albums.value = fetchedAlbums;
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
        <p class="text-3xl font-bold text-slate-800 mb-4">{ Albums }</p>
        <div v-if="albums" v-for="album in albums" class="py-1">
          <router-link
            :to="{ name: 'album', params: { id: album.id } }"
            class="text-slate-800 text-xl font-light"
            >{{ album.title }}</router-link
          >
        </div>
      </div>
    </section>
  </Layout>
</template>
