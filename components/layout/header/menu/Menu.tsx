import React from 'react';
import {IconComponent} from "@/components";
import Link from "next/link";
import {browsCategoryMock} from "@/mock/browsCategory";
import {navItems} from "@/mock/navItem";

export function Menu() {
    return (
        <div id="menu"
             className="container xl:flex xl:flex-col xl:gap-5 w-screen h-screen fixed bg-[#000000A3] z-50 hidden xl:bg-white xl:static top-0 xl:w-full xl:h-full ">
            <hr/>
            <div id="menu-list"
                 className="bg-white w-3/4  h-full rounded-r-3xl flex flex-col gap-4 -translate-x-full py-4 px-6xl:my-3 xl:p-0  xl:translate-x-0 xl:flex-row xl:w-full xl:rounded-none  xl:items-center xl:justify-between xl:pt-0  ">
                <div className="accordion">
                    <div
                        className="accordionBtn cursor-pointer bg-NestMartBrand1 flex gap-2.5 text-white p-2.5 rounded-md justify-between text-base font-bold items-center">
                        <IconComponent iconName={"apps"} width={30} height={30} title={"Browse All Categories"}/>
                        <IconComponent className={"accordionIcon fill-white rotate-90"} iconName={"arrow-right"}
                                       width={10} height={8}/>
                    </div>
                    <div className="relative mt-8 xl:absolute">
                        <div
                            className="accordionList  overflow-hidden transition-all duration-1000 h-0 xl:shadow-lg  xl:flex-col xl:hidden  xl:gap-6 xl:h-fit  xl:py-8 xl:px-7 xl:bg-white xl:border xl:border-NestMartBorder3 xl:rounded-lg  ">
                            <ul className="flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:gap-y-4 xl:gap-x-5">
                                {
                                    browsCategoryMock.map((category) => (
                                        <li className={"category-item "}>
                                            <IconComponent iconName={category.iconName} width={32} height={32}
                                                           title={category.title}/>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p className="hidden xl:flex xl:w-full xl:gap-1 xl:items-center xl:justify-center cursor-pointer">
                                <IconComponent iconName={"more"} width={28} height={28} title={"More Categories"}/>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mt-0.5 xl:hidden"/>

                <ul className="flex flex-col gap-8 mt-6 xl:mt-0 xl:flex-row xl:items-center ">

                    {navItems.map((item, index) => (
                        <li key={index} className={"font-bold text-NestMartTextHeading"}>
                            {item.type === 'icon' ? (
                                <IconComponent
                                    title={item.title}
                                    iconName={String(item.iconName)}
                                    width={Number(item.width)}
                                    height={Number(item.height)}
                                    linkClassName={"items-center font-bold"}
                                />
                            ) : (
                                <Link href={String(item.href)}>{item.label}</Link>
                            )}
                        </li>
                    ))}
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

    );
}
