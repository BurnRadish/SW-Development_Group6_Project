import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/HelloWorld.vue";
import Detail from "@/views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:place_id/:type",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;