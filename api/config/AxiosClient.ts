import axios from "axios";
import {toast} from "react-toastify";

const BASE_URL = "https://nest.navaxcollege.com/api";

const AxiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 120000,
});

AxiosClient.interceptors.request.use((response) => {
    return response;
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                toast.error('درخواست اشتباه است. لطفاً اطلاعات را بررسی کنید.');
                break;
            case 401:
                toast.error('لطفا وارد شوید');
                break;
            case 403:
                toast.error('شما اجازه دسترسی به این منبع را ندارید.');
                break;
            case 404:
                toast.error('صفحه یا منبع مورد نظر یافت نشد.');
                break;
            case 409:
                toast.error('تضاد در داده‌ها وجود دارد.');
                break;
            case 422:
                toast.error('داده‌های ارسال شده نامعتبر هستند.');
                break;
            case 429:
                toast.error('تعداد درخواست‌ها بیش از حد مجاز است. لطفاً بعداً تلاش کنید.');
                break;
            case 500:
                toast.error('خطای داخلی سرور. لطفاً بعداً دوباره تلاش کنید.');
                break;
            case 502:
                toast.error('خطای دروازه. سرور پاسخ مناسبی نمی‌دهد.');
                break;
            case 503:
                toast.error('سرویس موقتا در دسترس نیست.');
                break;
            case 504:
                toast.error('سرور پاسخگو نیست، زمان انتظار تمام شد.');
                break;
            default:
                toast.error(`خطای نامشخص رخ داده است: ${error.response.status}`);
        }
    } else if (error.request) {
        toast.error('خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.');
    } else {
        toast.error(`خطا اتفاق افتاده است: ${error.message}`);
    }
    return Promise.reject(error);
})

export default AxiosClient;