import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/fruits",
            component: () => import("./components/Fruit/Index.vue"),
            name: "fruit.index",
        },
        {
            path: "/users/login",
            component: () => import("./components/User/Login.vue"),
            name: "user.login",
        },
        {
            path: "/users/registration",
            component: () => import("./components/User/Registration.vue"),
            name: "user.registration",
        },
        {
            path: "/users/personal",
            component: () => import("./components/User/Personal.vue"),
            name: "user.personal",
        },
        {
            path: "*",
            component: () => import("./components/User/Personal.vue"),
            name: "404",
        },
    ],
});

router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
        if (to.name === "user.login" || to.name === "user.registration") {
            return next();
        } else {
            return next({
                name: "user.login",
            });
        }
    }

    if (to.name !== "user.login" && access_token) {
        return next({
            name: "user.personal",
        });
    }

    next();
});

export default router;
