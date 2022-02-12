import { createWebHistory, createRouter } from 'vue-router';
//import Home from '../views/Home'
import Detail from '../views/Detail'
import Result from '../views/Result'

const routes = [
    //{path: '/', name:"App", component: Home},
    {path: '/detail/:place_id/:categorycodes', name:"Detail", component: Detail},
    {path: '/result/:keyword/:type', name:"Result", component: Result},

];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
