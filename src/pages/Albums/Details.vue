<script setup>
import Layout from "../../components/shared/Layout.vue";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getAlbum, getAlbumPhotos } from "../../api/albums";

const photos = ref([]);
const album = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedPhotos = await getAlbumPhotos(route.params.id);
  const fetchedAlbum = await getAlbum(route.params.id);
  photos.value = fetchedPhotos;
  album.value = fetchedAlbum;
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
        <p class="text-2xl text-center font-bold text-slate-800 mb-4">
          { {{ album.title }} }
        </p>
        <div class="grid grid-cols-5 gap-8">
          <div v-for="photo in photos" :key="photo.id">
            <a :href="photo.url" target="_blank">
              <img :src="photo.thumbnailUrl" :alt="photo.title" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
