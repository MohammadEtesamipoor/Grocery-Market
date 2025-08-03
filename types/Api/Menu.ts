import {MenuItems, MenuItemsList} from "@/types/Api/MenuItem";

export interface MenuType {
    title: string
    position: string
    menu_items: MenuItems<MenuItemsList>
}

