import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Proms {
    populate: Array<"thumbnail" | "categories" | "gallery">;
}

export const getAllProducts = async ({populate}: Proms): Promise<Response<ProductType>> => {
    console.log()
    const response = await AxiosClient.get(`/products`, {
        params: {
            populate: `${populate?.join(',')}`,
            filters: {
                is_popular: {
                    $eq: true
                }
            }
        }
    })
    return response.data;
}