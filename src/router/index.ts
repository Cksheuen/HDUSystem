import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Latest.vue'),
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Login.vue'),
        },
        {
            path: '/latest',
            name: 'latest',
            component: () => import('../views/Latest.vue'),
        },
        {
            path: '/course',
            name: 'course',
            component: () => import('../views/Course.vue'),
        },
        {
            path: '/follow',
            name: 'follow',
            component: () => import('../views/Follow.vue'),
        },/* 
        {
            path: '/swagger',
            name: 'swagger',
            component: () => import('../views/Swagger.vue'),
        }, */
        {
            path: '/editor',
            name: 'editor',
            component: () => import('../views/Editor.vue'),
        },
    ],
});

export default router;
