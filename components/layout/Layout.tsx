import React, {useState} from 'react';
import {Footer, Header, Menu} from "@/components";


interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <>
            <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
            <main className="pt-20 md:pt-24 lg:pt-28">{children}</main>
            <Footer/>
        </>
    );
}

