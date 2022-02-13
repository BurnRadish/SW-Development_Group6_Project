import { createWebHistory, createRouter } from "vue-router";
//import Home from "@/components/HelloWorld.vue";
import Detail from "@/views/Detail.vue";
import Result from '../views/Result'
import Main from "../views/Main.vue"

const routes = [
  {path: "/",name: "Main",component: Main},
  {
    path: "/detail/:place_id/:type",
    name: "Detail",
    component: Detail,
  },
  {
    path: '/result/:keyword/:type', 
    name:"Result", 
    component: Result
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
