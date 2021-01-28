import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import News from "@/views/news.vue";
import NotFound from "@/views/notFound.vue";

const routes = [
  {
    path: "/BlogDesign",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
