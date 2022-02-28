import axios from "axios";
import router from "./router";

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers.authorization =
                "Bearer " + localStorage.getItem("access_token");
        }
        return config;
    },
    (error) => {}
);
api.interceptors.responce.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers.authorization =
                "Bearer " + localStorage.getItem("access_token");
        }
        return config;
    },
    (error) => {
        if (error.responce.data.message === "Token has expired") {
            return axios
                .post(
                    "api/auth/refresh",
                    {},
                    {
                        headers: {
                            authorization:
                                "Bearer " +
                                localStorage.getItem("access_token"),
                        },
                    }
                )
                .then((res) => {
                    localStorage.setItem("access_token", res.data.access_token);
                    error.headers.authorization =
                        "Bearer " + res.data.access_token;

                    return api.request(error.config);
                });
        }
        if (error.responce.status === 401) {
            router.push({ name: "user.login" });
        }
    }
);

export default api;
