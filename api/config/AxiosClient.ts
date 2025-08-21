import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://nest.navaxcollege.com/api";

const errorMessages = {
    400: 'درخواست اشتباه است. لطفاً اطلاعات را بررسی کنید.',
    401: 'لطفا وارد شوید',
    403: 'شما اجازه دسترسی به این منبع را ندارید.',
    404: 'صفحه یا منبع مورد نظر یافت نشد.',
    409: 'تضاد در داده‌ها وجود دارد.',
    422: 'داده‌های ارسال شده نامعتبر هستند.',
    429: 'تعداد درخواست‌ها بیش از حد مجاز است. لطفاً بعداً تلاش کنید.',
    500: 'خطای داخلی سرور. لطفاً بعداً دوباره تلاش کنید.',
    502: 'خطای دروازه. سرور پاسخ مناسبی نمی‌دهد.',
    503: 'سرویس موقتا در دسترس نیست.',
    504: 'سرور پاسخگو نیست، زمان انتظار تمام شد.'
};

// ساخت کلاینت آکسیوس با تنظیمات پایه
const AxiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 120000, // 2 دقیقه
    headers: {
        "Content-Type": "application/json",
    },
});

AxiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

AxiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;

            const message = errorMessages[status] || `خطای نامشخص رخ داده است: ${status}`;
            toast.error(message);

            if (status === 401) {
                localStorage.removeItem("token");
            }


        } else if (error.request) {
            toast.error('خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.');
        } else {
            toast.error(`خطا اتفاق افتاده است: ${error.message}`);
        }

        console.error('Axios error:', error);

        return Promise.reject(error);
    }
);

const api = {
    get: (url, config) => AxiosClient.get(url, config),
    post: (url, data, config) => AxiosClient.post(url, data, config),
    put: (url, data, config) => AxiosClient.put(url, data, config),
    delete: (url, config) => AxiosClient.delete(url, config),
    patch: (url, data, config) => AxiosClient.patch(url, data, config),
};

export default api;
