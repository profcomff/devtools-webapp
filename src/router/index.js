import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/devtools',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/devtools/auth',
        component: () => import('../views/AuthView.vue'),
    },
    {
        path: '/devtools/register',
        component: () => import('../views/RegisterView.vue'),
    },
    {
        path: '/devtools/me',
        component: () => import('../views/MeView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
