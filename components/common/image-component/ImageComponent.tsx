import React from 'react';
import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export function ImageComponent({src, alt, className, width, height}: ImageProps) {
    return (
        <Image className={className} src={src} alt={alt} width={width} height={height}></Image>
    );
}
