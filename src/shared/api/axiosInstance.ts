import axios from "axios";

let lastErrorTime = 0;
const ERROR_COOLDOWN = 2000; // 2 секунды ожидания

const api = axios.create({
    baseURL: "/api/v1",
    timeout: 5000,
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 404) {
            const now = Date.now();
            if (now - lastErrorTime < ERROR_COOLDOWN) {
                console.log('⏸️ Слишком много 404, запрос заблокирован');
                return Promise.reject({ message: 'Too many requests' });
            }
            lastErrorTime = now;
        }
        return Promise.reject(error);
    }
);

export default api;
