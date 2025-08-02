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
    return (
        <Image src={src} alt={alt} width={width} height={height} fill={fill} className={className}></Image>
    );
}
