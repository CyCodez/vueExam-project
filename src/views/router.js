import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Counter from "@/views/Counter.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter,
    },
    {
      path: "/:pathMatch(.*)*",
      name: NotFound,
      component: NotFound,
    },
  ],
});

export default router;
