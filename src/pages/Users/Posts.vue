<script setup>
import Layout from "../../components/shared/Layout.vue";
import PostCard from "../../components/shared/PostCard.vue";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getUserPosts, getUser } from "../../api/users";

const user = ref([]);
const posts = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedPosts = await getUserPosts(route.params.id);
  const fetchedUser = await getUser(route.params.id);
  user.value = fetchedUser;
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
        <p class="text-3xl font-bold text-slate-800 mb-4">
          { {{ user.name }} posts}
        </p>
        <div v-if="posts" v-for="post in posts">
          <PostCard :title="post.title" :body="post.body" />
        </div>
      </div>
    </section>
  </Layout>
</template>
