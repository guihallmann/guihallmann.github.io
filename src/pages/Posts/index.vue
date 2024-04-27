<script setup>
import Layout from "../../components/shared/Layout.vue";
import PostCard from "../../components/shared/PostCard.vue";
import { getAllPosts } from "../../api/posts";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const posts = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const fetchedPosts = await getAllPosts();
  posts.value = fetchedPosts;
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
        <p class="text-3xl font-bold text-slate-800 mb-4">{ Posts }</p>
        <div v-if="posts" v-for="post in posts" class="py-1">
          <router-link :to="{ name: 'post', params: { id: post.id } }">
            <PostCard :title="post.title" :body="post.body" />
          </router-link>
          <hr />
        </div>
      </div>
    </section>
  </Layout>
</template>
