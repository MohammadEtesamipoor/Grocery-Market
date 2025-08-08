import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Proms {
    populate?: Array<"thumbnail" | "categories" | "gallery">;
    filters?: {}
    pagination?:{}
    sort?:Array<string>
}

export const getAllProducts = async ({populate, filters,pagination,sort}: Proms): Promise<Response<ProductType>> => {
    const response = await AxiosClient.get(`/products`, {
        params: {
            populate: `${populate?.join(',')}`,
            filters:filters,
            pagination:pagination,
            sort:sort
        }
    })
    return response.data;
}

