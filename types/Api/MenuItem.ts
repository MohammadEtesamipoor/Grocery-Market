import {EntityDataType} from "@/types/Api/Response";

export interface MenuItems<T>{
    data: Array<EntityDataType<T>>
}
export interface MenuItemsList{
    link: string
    icon_name: string
    title: string
    rank: string
    icon_path?: number
}