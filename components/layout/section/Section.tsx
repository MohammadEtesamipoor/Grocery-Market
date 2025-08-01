import React from "react";
import {twMerge} from 'tailwind-merge'

interface Props {
    children?: React.ReactNode
    className?: string
}

export function Section({children, className}: Props): JSX.Element {
    return (
        <section className={twMerge('container mt-8 w-full h-full relative  xl:mt-16', className)}>
            {children}
        </section>
    );
}