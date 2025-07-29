import React from 'react';
import Link from "next/link";

interface IconComponentProps {
    iconName: string;
    width: number;
    height: number;
    className?: string;
    title?: string;
    link?: string;
    hideTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    linkClassName?: string;
}

export function IconComponent({
                                  width,
                                  height,
                                  className,
                                  iconName,
                                  title,
                                  link,
                                  hideTitleOnMobile,
                                  badge,
                                  titleClassName,
                                  linkClassName,
                              }: IconComponentProps) {
    return (
        <Link href={link ?? "#"} className={"flex gap-2.5  " + linkClassName}>
            <span className={"relative h-fit"}>
                <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`}
                     xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="xMidYMid meet">
                    <use href={`/assets/icons/sprite.svg#${iconName}`}></use>
                </svg>
                {
                    badge &&
                    <div
                        className="w-4 h-4  flex justify-center items-center text-white p-2.5 absolute rounded-full z-10 bg-NestMartBrand1 text-xs -top-2.5 -right-2.5 ">
                        {badge}
                    </div>
                }
            </span>

            {title &&
                <span className={titleClassName}>{title}</span>
            }
        </Link>
    );
}