import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://nest.navaxcollege.com/api";

const AxiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 120000,
});

AxiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    toast.error('Bad request. Please check your input.');
                    break;
                case 401:
                    toast.error('Please log in.');
                    break;
                case 403:
                    toast.error('You do not have permission to access this resource.');
                    break;
                case 404:
                    toast.error('The requested page or resource was not found.');
                    break;
                case 409:
                    toast.error('There is a conflict with the current data.');
                    break;
                case 422:
                    toast.error('The submitted data is invalid.');
                    break;
                case 429:
                    toast.error('Too many requests. Please try again later.');
                    break;
                case 500:
                    toast.error('Internal server error. Please try again later.');
                    break;
                case 502:
                    toast.error('Bad gateway. The server is not responding correctly.');
                    break;
                case 503:
                    toast.error('Service temporarily unavailable.');
                    break;
                case 504:
                    toast.error('Server is unresponsive; the request timed out.');
                    break;
                default:
                    toast.error(`An unknown error has occurred: ${error.response.status}`);
            }
        } else if (error.request) {
            toast.error('Connection error. Please check your internet connection.');
        } else {
            toast.error(`An error has occurred: ${error.message}`);
        }

        return Promise.reject(error);
    }
);

export default AxiosClient;
