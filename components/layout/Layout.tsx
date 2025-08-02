import React from 'react';
import {Footer, Header} from "@/components";


interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

