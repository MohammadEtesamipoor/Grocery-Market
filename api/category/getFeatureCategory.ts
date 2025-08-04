import AxiosClient from "@/api/config/AxiosClient";
import {Response} from "@/types/Api/Response";
import {CategoryItemType} from "@/types/Api/CategoryItem";

export const getFeatureCategory = async () :Promise<Response<CategoryItemType>> => {
    const response = await AxiosClient.get('/categories',{
        params: {
            populate:"thumbnail",
            filters: {
                is_featured:{
                    $eq:true
                }
            }
        }
    });
    return response.data;
}
