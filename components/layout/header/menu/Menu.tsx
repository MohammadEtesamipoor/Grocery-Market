import React, {useEffect, useState} from 'react';
import {IconComponent} from "@/components";
import Link from "next/link";
import {EntityDataType} from "@/types/Api/Response";
import {MenuItemsList} from "@/types/Api/MenuItem";
import {useMenu} from "@/hooks/use-menu";
import {useOverlay} from "@/hooks/use-overlay";

interface Props {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function Menu({showMenu, setShowMenu}: Props) {
    const [isCategoryMenu, setIsCategoryMenu] = useState(false);
    const {menuItem: mainMenuItems} = useMenu("main_menu")
    const {menuItem: browsMenuItems} = useMenu("brows-category")

    useOverlay({
        onClick: () => {
            setIsCategoryMenu(false)
        }
    })

    useEffect(() => {
        if (showMenu)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [showMenu]);
    return (
        <div id="menu"
             className={`container p-0 xl:px-5 xl:flex xl:flex-col xl:gap-5 w-screen h-screen fixed bg-[#000000A3] z-50  
            xl:bg-white xl:static top-0 xl:w-full xl:h-full xl:visible 
             ${showMenu ? "visible" : "invisible"}
            `}
             onClick={() => {
                 setShowMenu(prevState => !prevState);
             }}>
            <hr/>
            <div id="menu-list"
                 onClick={(e: React.MouseEvent) => e.stopPropagation()}
                 style={{
                     transition: "all .3s ease",
                 }}
                 className={`bg-white w-3/4  h-full rounded-r-3xl flex flex-col gap-4  py-4 px-6 xl:my-3 xl:p-0
                     xl:translate-x-0 xl:flex-row xl:w-full xl:rounded-none  xl:items-center xl:justify-between xl:pt-0  
                        overflow-x-hidden overflow-y-scroll lg:overflow-visible 
                     ${showMenu ? "translate-x-0 " : "-translate-x-full"}
                     `}>
                <div className="accordion">
                    <div
                        onClick={() => setIsCategoryMenu(prevState => !prevState)}
                        className="accordionBtn cursor-pointer bg-NestMartBrand1 flex gap-2.5 text-white p-2.5 rounded-md justify-between text-base font-bold items-center">
                        <IconComponent iconName={"apps"} width={30} height={30} title={"Browse All Categories"}/>
                        <IconComponent className={"accordionIcon fill-white rotate-90"} iconName={"arrow-right"}
                                       width={10} height={8}/>
                    </div>
                    <div
                        className={`relative mt-6 xl:absolute overflow-hidden transition-all duration-500 ${isCategoryMenu ? "h-[420px] " : "h-0"}`}>
                        <div
                            className={`accordionList  xl:shadow-lg  xl:flex-col 
                               xl:gap-6   xl:py-6 xl:px-5 xl:bg-white xl:border xl:border-NestMartBorder3 xl:rounded-lg`}>
                            <ul className="flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:gap-y-4 xl:gap-x-5">
                                {
                                    browsMenuItems?.data.map((category: EntityDataType<MenuItemsList>, index: number) => (
                                        <li key={index} className={"category-item "}>
                                            <IconComponent iconName={category.attributes.icon_name} width={32}
                                                           height={32}
                                                           title={category.attributes.title}/>
                                        </li>
                                    ))
                                }
                                {/*Use Mock Api{*/}
                                {/*    .map((category, index) => (*/}
                                {/*        <li key={index} className={"category-item "}>*/}
                                {/*            <IconComponent iconName={category.iconName} width={32} height={32}*/}
                                {/*                           title={category.title}/>*/}
                                {/*        </li>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </ul>
                            <p className="hidden xl:flex xl:w-full xl:gap-1 xl:items-center xl:justify-center cursor-pointer mt-5">
                                <IconComponent iconName={"more"} width={28} height={28} title={"More Categories"}/>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mt-0.5 xl:hidden"/>

                <ul className="flex flex-col gap-8 mt-6 xl:mt-0 xl:flex-row xl:items-center ">

                    {mainMenuItems?.data.reverse().map((item: EntityDataType<MenuItemsList>, index) => (
                        <li key={index} className={"font-bold text-NestMartTextHeading"}>
                            {item.attributes.icon_name ? (
                                <IconComponent
                                    title={item.attributes.title}
                                    iconName={String(item.attributes.icon_name)}
                                    width={20}
                                    height={20}
                                    linkClassName={"items-center font-bold"}
                                    link={item.attributes.link}
                                />
                            ) : (
                                <Link href={item.attributes.link}>{item.attributes.title}</Link>
                            )}
                        </li>
                    ))}
                    {/* Use Mock Api{*/}
                    {/*    navItems.map((item, index) => (*/}
                    {/*        <li key={index} className={"font-bold text-NestMartTextHeading"}>*/}
                    {/*            {item.type === "icon" ? (*/}
                    {/*                <IconComponent*/}
                    {/*                    title={item.label}*/}
                    {/*                    iconName={String(item.iconName)}*/}
                    {/*                    width={20}*/}
                    {/*                    height={20}*/}
                    {/*                    linkClassName={"items-center font-bold"}*/}
                    {/*                />*/}
                    {/*            ) : (*/}
                    {/*                <Link href={String(item.href)}>{item.label}</Link>*/}
                    {/*            )}*/}
                    {/*        </li>*/}
                    {/*    ))*/}
                    {/*}*/}
                </ul>

                <div className="hidden  gap-2 lg:flex items-center">
                    <div>
                        <IconComponent iconName={"headphone"} width={36} height={32} link={"tel:+1900"}/>
                    </div>
                    <div className="flex flex-col">
                        <Link href="tel:+1900" className="text-2xl text-NestMartBrand1 font-bold">1900 - 8888</Link>
                        <span className="text-NestMartTextBody text-xs">24/7 Support Center</span>
                    </div>
                </div>
            </div>

            <hr className="hidden xl:block"/>

        </div>

    )
        ;
}
