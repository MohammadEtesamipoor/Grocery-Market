import AxiosClient from "@/api/config/AxiosClient";
import {RegisterResponse} from "@/types/Api/Auth";

interface registerData{
    username: string;
    email: string;
    password: string;
}

interface loginData{
    identifier: string;
    password: string;
}

export async function registerApiCall(data: registerData): Promise<RegisterResponse> {
    const response = await AxiosClient.post('/auth/local/register', data);
    return response.data;
}

export async function loginApiCall(data: loginData): Promise<RegisterResponse> {
    const response = await AxiosClient.post('/auth/local', data);
    return response.data;
}

