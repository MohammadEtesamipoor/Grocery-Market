import AxiosClient from "@/api/config/AxiosClient";
import {RegisterResponse} from "@/types/Api/Auth";

interface Data{
    username: string;
    email: string;
    password: string;
}
export async function registerApiCall(data: Data): Promise<RegisterResponse> {
    const response = await AxiosClient.post('/auth/local/register', data);
    return response.data;
}
