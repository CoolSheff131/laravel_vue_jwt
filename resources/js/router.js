import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
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
    ],
});
