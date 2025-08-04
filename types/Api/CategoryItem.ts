import {EntityDataType} from "@/types/Api/Response";
import {ImageType} from "@/types/Api/Image";

export interface CategoryItemType{
    title: string
    description: any
    slug: string
    is_featured: boolean
    icon_name: any
    color?: string
    product_count?: number
    link?: string
    thumbnail:thumbnailType
}

export interface thumbnailType{
    data?:EntityDataType<ImageType>
}
