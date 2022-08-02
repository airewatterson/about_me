import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [{
        name: "home",
        path: "/",
        component: () => import('../pages/Home.vue')
    },
    {
        name: "about",
        path: "/about",
        component: () => import('../pages/About.vue')
    },
    {
        name: "mywork",
        path: "/work",
        component: () => import('../pages/MyWork.vue')
    },
    {
        name: "contact",
        path: "/contact",
        component: () => import('../pages/Contact.vue')
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