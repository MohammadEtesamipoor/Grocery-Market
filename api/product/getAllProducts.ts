import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Proms {
    populate: Array<"thumbnail" | "categories" | "gallery">;
    filter: "is_popular" | "is_popular_fruit" | "is_top_selling" | "is_trending" | "is_best_seller"
}

export const getAllProducts = async ({populate, filter}: Proms): Promise<Response<ProductType>> => {
    console.log()
    const response = await AxiosClient.get(`/products`, {
        params: {
            populate: `${populate?.join(',')}`,
            ...(filter && {
                filters: {
                    [filter]: {
                        $eq: true
                    }
                }
            })
        }
    })
    return response.data;
}

