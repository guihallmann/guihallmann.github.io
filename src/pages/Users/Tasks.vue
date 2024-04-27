<script setup>
import Layout from "../../components/shared/Layout.vue";
import { getUser, getUserTasks } from "../../api/users";
import { ref, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const tasks = ref([]);
const user = ref([]);
const isLoading = ref(true);
const route = useRoute();
onMounted(async () => {
  const fetchedTasks = await getUserTasks(route.params.id);
  const fetchedUser = await getUser(route.params.id);

  fetchedTasks.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.title.localeCompare(b.title);
    }
    return a.completed ? -1 : 1;
  });
  tasks.value = fetchedTasks;
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
          { {{ user.name }} <span class="text-indigo-600">tasks</span> }
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="task in tasks" :key="task.id">
            <li
              class="text-slate-800 text-justify text-base font-light list-none"
            >
              {{ `${task.completed ? "🟢" : "🔴"} ${task.title}` }}
            </li>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
