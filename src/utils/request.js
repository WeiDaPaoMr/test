import axios from "axios"
import store from "../store/index"
const serverce = axios.create({
    baseURL: process.env.VUE_APP_VUE_APP_SERVICE_URL,
    timeout: 5000
})
// 请求拦截
serverce.interceptors.request.use(function (config) {
    const token = store.getters.token
    return config;
}, function (error) {
    return Promise.reject(error);
});
//响应拦截
serverce.interceptors.response.use(function (response) {
    if (response.status < 400) {
        if (response.data.data) {
            return response.data.data
        } else {
            return response.data.msg
        }
    }
    if (response.status === 401) {
        return
    }
    // return response;
}, function (error) {
    return Promise.reject(error);
});