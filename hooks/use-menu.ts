import {MenuItems, MenuItemsList} from "@/types/Api/MenuItem";
import {useQuery} from "@tanstack/react-query";
import {getMenu} from "@/api/menu/getMenu";
import {EntityDataType} from "@/types/Api/Response";
import {MenuType} from "@/types/Api/Menu";

export function useMenu(position:string) {
    const {data: menuData} = useQuery({queryKey: ["getMenu"], queryFn: () => getMenu()})
    let menuItem: null | MenuItems<MenuItemsList> = null
    if (menuData) {
        const findMenuItem: EntityDataType<MenuType>[] = menuData.data.filter(item => item.attributes.position === position)
        if (findMenuItem) {
            menuItem = findMenuItem[0].attributes.menu_items
            menuItem.data.sort((a: EntityDataType<MenuItemsList>, b: EntityDataType<MenuItemsList>) => {
                if (a.attributes.rank < b.attributes.rank)
                    return 1;
                if (a.attributes.rank > b.attributes.rank)
                    return -1;
                return 0;
            })
        }
    }
    return {menuItem};
}