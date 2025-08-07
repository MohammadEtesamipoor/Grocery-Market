import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Proms {
    populate?: Array<"thumbnail" | "categories" | "gallery">;
    filters?: {}
}

export const getAllProducts = async ({populate, filters}: Proms): Promise<Response<ProductType>> => {
    const response = await AxiosClient.get(`/products`, {
        params: {
            populate: `${populate?.join(',')}`,
            filters:filters,
        }
    })
    console.log(response.data)
    return response.data;
}

