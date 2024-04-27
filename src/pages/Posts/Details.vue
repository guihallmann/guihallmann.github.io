<script setup>
import Layout from "../../components/shared/Layout.vue";
import CommentCard from "../../components/shared/CommentCard.vue";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getPost, getPostComments } from "../../api/posts";

const comments = ref([]);
const post = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedComments = await getPostComments(route.params.id);
  const fetchedPost = await getPost(route.params.id);
  comments.value = fetchedComments;
  post.value = fetchedPost;
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
          { {{ post.title }} }
        </p>
        <p class="text-slate-800 text-md font-light mb-4">{{ post.body }}</p>
        <p class="text-xl font-bold text-indigo-600 mb-4">{ Comments }</p>
        <div v-if="comments" v-for="comment in comments" class="py-2">
          <CommentCard :email="comment.email" :body="comment.body" />
        </div>
      </div>
    </section>
  </Layout>
</template>
