import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [{
        name: "home",
        component: () => import('../pages/Home.vue')
    },
    {
        name: "about",
        path: "/about",
        component: () => import('../pages/About.vue')
    },
    {
        name: "hello",
        path: "/hello",
        component: () => import('../components/HelloWorld.vue')
    }
    ],
    history: createWebHistory()
});

export default router;