import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {MenuType} from "@/types/Api/Menu";

export const getMenu = async (): Promise<Response<MenuType>> => {
    const response = await AxiosClient.get("/menus?populate=*")
    return response.data;
}
