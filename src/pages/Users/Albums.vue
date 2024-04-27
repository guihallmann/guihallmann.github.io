<script setup>
import Layout from "../../components/shared/Layout.vue";
import AlbumCard from "../../components/shared/AlbumCard.vue";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getUserAlbums, getUser } from "../../api/users";

const user = ref([]);
const albums = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedAlkbums = await getUserAlbums(route.params.id);
  const fetchedUser = await getUser(route.params.id);
  user.value = fetchedUser;
  albums.value = fetchedAlkbums;
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
          { {{ user.name }} <span class="text-indigo-600">albums</span>}
        </p>

        <div v-for="album in albums">
          <router-link :to="{ name: 'album', params: { id: album.id } }">
            <AlbumCard :title="album.title" />
          </router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>
