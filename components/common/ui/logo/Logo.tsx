import React from 'react';
import {ImageComponent} from "@/components";
import Link from "next/link";

export function Logo({isMobile}: { isMobile: boolean }) {
    return (
        <Link href="/">
            <div className={"flex items-center gap-1"}>
                <ImageComponent src={'/assets/images/logo.png'} alt={'logo'} width={isMobile ? 44 : 80}
                                height={isMobile ? 44 : 80}
                                className={"h-auto object-contain"}/>
                <div className="flex flex-col items-start">
                    <h1 className={`text-NestMartBrand1 leading-6 font-bold ${isMobile ? "text-2xl" : "text-5xl"}`}>LOGO</h1>
                    <h2 className={`text-xs font-montserrat text-NestMartTextHeading leading-none pl-0.5 tracking-wider ${isMobile ? "" : "mt-2"}`}>
                        MART
                        & GROCERY</h2>

                </div>
            </div>
        </Link>
    );
}
