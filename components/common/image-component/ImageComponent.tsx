import React from 'react';
import Image from "next/image";

interface ImageProps {
    src?: string | null;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    fill?: boolean;
    classNamePlaceHolder?: string;
}

export function ImageComponent({src = "", alt, className, width, height, fill,classNamePlaceHolder}: ImageProps) {
    const imgSrc = src ? (src.includes("/uploads") ? `https://nest.navaxcollege.com${src}` : src) : "";
    return (
        src ?
            <Image src={imgSrc} alt={"alt"} width={width} height={height}
                   fill={fill} className={className}></Image>
            :
            <Image src={"https://i.postimg.cc/K8NfvFpB/img-placeholder-250x250.png"}
                   className={classNamePlaceHolder}
                   alt={alt} width={width} height={height}/>
    );
}
