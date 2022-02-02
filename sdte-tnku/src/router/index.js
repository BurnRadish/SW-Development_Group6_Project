import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home'
import Detail from '../views/Detail'
import Result from '../views/Result'

const routes = [
    {path: '/', name:"Home", component: Home},
    {path: '/Detail', name:"Detail", component: Detail},
    {path: '/Result', name:"Result", component: Result},

];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;