import React, {useEffect, useState} from 'react';
import {IconComponent, Login, Logo, Menu, SearchForm} from "@/components";
import {useOverlay} from "@/hooks/use-overlay";


export function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const[login, setLogin] = useState<boolean>(false);

    useOverlay({
        onClick: () => {
            setLogin(false)
        }
    })
    useEffect(() => {
        if (login)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [login]);
    const handelStateMenu = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <header className="xl:mt-8 xl:flex xl:flex-col xl:gap-8">
            {
                login && <Login setLogin={setLogin}/>
            }
            <nav className="py-4 flex justify-between items-center container xl:hidden ">
                <Logo isMobile={true}/>
                <div onClick={handelStateMenu} id="burger-btn" className="cursor-pointer">
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
                    <li onClick={(e)=>{
                        e.stopPropagation()
                        setLogin(prevState => !prevState)
                    }} className={"cursor-pointer"}>
                        <IconComponent iconName={"user"} width={24} height={24} title={"Account"}
                                       titleClassName={"text-NestMartTextBody hidden xl:block"}/>
                    </li>
                    <li className={"cursor-pointer"}>
                        <IconComponent className={"fill-NestMartTextHeading "} iconName={"cart"} badge={4} width={24}
                                       titleClassName={"text-NestMartTextBody hidden xl:block"}
                                       height={24}
                                       title={"Cart"}/>
                    </li>
                </ul>
            </div>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
        </header>
    );
}
