import React from 'react';
import {IconComponent, ImageComponent, Logo, Menu, SearchForm} from "@/components";
import Link from "next/link";

export function Header() {
    return (
        <header className="xl:mt-8 xl:flex xl:flex-col xl:gap-8">
            <nav className="py-4 flex justify-between items-center container xl:hidden ">
                <Logo isMobile={true}/>
                <div id="burger-btn" className="cursor-pointer">
                    <IconComponent className={"fill-black stroke-black"} iconName={"menu"} width={26} height={26}/>
                </div>
            </nav>
            <hr className="xl:hidden"/>
            <div className="flex justify-between items-center container py-4 xl:gap-16 w-full 2xl:gap-60">
                <div className="hidden xl:block ">
                    <Logo isMobile={false}/>
                </div>
                <SearchForm/>
                <ul className={"flex gap-3 items-center"}>
                    <li>
                        <IconComponent iconName={"user"} width={24} height={24} title={"Account"}
                                       titleClassName={"text-NestMartTextBody hidden xl:block"}/>
                    </li>
                    <li>
                        <IconComponent className={"fill-NestMartTextHeading "} iconName={"cart"} badge={4} width={24}
                                       titleClassName={"text-NestMartTextBody hidden xl:block"}
                                       height={24}
                                       title={"Cart"}/>
                    </li>
                </ul>
            </div>
            <Menu/>
        </header>
    );
}
