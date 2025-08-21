import {EntityDataType} from "@/types/Api/Response";
import {CategoryItemType} from "@/types/Api/CategoryItem";
import {ImageType} from "@/types/Api/Image";

export interface ProductType {
    title: string
    description: any
    quantity: number
    price: number
    sell_price?: number
    discount_expire_date?: string
    rate: number
    weight?: number
    is_popular: boolean
    is_top_selling: boolean
    is_trending: boolean
    SKU?: string
    label?: string
    unit: string
    total?: number
    sold?: number
    is_popular_fruit?: boolean
    is_best_seller?: boolean
    thumbnail?: {
        data?: EntityDataType<ImageType>
    }
    gallery?: {
        data?: EntityDataType<ImageType>
    }
    categories?: {
        data?: Array<EntityDataType<CategoryItemType>>
    }
}

