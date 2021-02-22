import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Blogs from "@/views/blogs.vue";
import News from "@/views/news.vue";
import Events from "@/views/events.vue";
import NotFound from "@/views/notFound.vue";
import newsContent from "@/components/newsContent.vue";

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
  { path: "/news/:id", component: newsContent },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
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
