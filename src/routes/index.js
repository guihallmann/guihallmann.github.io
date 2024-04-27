import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Users from "../pages/Users/index.vue";
import Posts from "../pages/Posts/index.vue";
import PostDetails from "../pages/Posts/Details.vue";
import Albums from "../pages/Albums/index.vue";
import AlbumDetails from "../pages/Albums/Details.vue";
import UserDetails from "../pages/Users/Details.vue";
import UserPosts from "../pages/Users/Posts.vue";
import UserAlbums from "../pages/Users/Albums.vue";
import UserTasks from "../pages/Users/Tasks.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/users", component: Users },
  { path: "/user/:id", component: UserDetails, name: "user", props: true },
  {
    path: "/user/:id/posts",
    component: UserPosts,
    name: "userPosts",
    props: true,
  },
  {
    path: "/user/:id/albums",
    component: UserAlbums,
    name: "userAlbums",
    props: true,
  },
  {
    path: "/user/:id/tasks",
    component: UserTasks,
    name: "userTasks",
    props: true,
  },
  { path: "/posts", component: Posts },
  { path: "/posts/:id", component: PostDetails, name: "post", props: true },
  { path: "/albums", component: Albums },
  { path: "/album/:id", component: AlbumDetails, name: "album", props: true },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
