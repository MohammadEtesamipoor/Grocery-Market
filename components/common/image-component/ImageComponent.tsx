import React from 'react';
import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    fill?: boolean;
}

export function ImageComponent({src, alt, className, width, height, fill}: ImageProps) {
    const domain = src.includes("/uploads");
    return (
        src ?
            <Image src={domain ? `https://nest.navaxcollege.com${src}` : src} alt={"alt"} width={width} height={height}
                   fill={fill} className={className}></Image>
            :
            <Image src={"https://i.postimg.cc/K8NfvFpB/img-placeholder-250x250.png"} className={"object-cover"}
                   alt={alt} width={width} height={height}/>
    );
}
