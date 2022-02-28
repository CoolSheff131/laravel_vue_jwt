import axios from "axios";
import router from "./router";

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers = {
                authorization: "Bearer " + localStorage.getItem("access_token"),
            };
        }
        return config;
    },
    (error) => {}
);
api.interceptors.responce.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers = {
                authorization: "Bearer " + localStorage.getItem("access_token"),
            };
        }
        return config;
    },
    (error) => {
        if (error.responce.status === 401) {
            router.push({ name: "user.login" });
        }
    }
);

export default api;
