import React, {useEffect, useState} from 'react';
import {IconComponent, Login, Logo, Menu, SearchForm} from "@/components";
import {useModal} from "@/store/ModalContext";
import {useOverlay} from "@/hooks/use-overlay";
import {useAuth} from "@/store/Auth";


export function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const {isModalOpen,openModal,closeModal}=useModal();
    const{isLogin,logout}=useAuth()
    useOverlay({
        onClick: () => {
            closeModal()
        }
    })
    useEffect(() => {
        if (isModalOpen)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [isModalOpen]);
    const handelStateMenu = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <header className="xl:mt-8 xl:flex xl:flex-col xl:gap-8">
            {
                isModalOpen && <Login />
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
                    {
                        !isLogin ?
                        <li onClick={(e)=>{
                            e.stopPropagation()
                            openModal()
                        }} className={"cursor-pointer"}>
                            <IconComponent iconName={"user"} width={24} height={24} title={"Account"}
                                           titleClassName={"text-NestMartTextBody hidden xl:block"}/>
                        </li>
                            :

                            <li onClick={(e)=>{
                                e.stopPropagation()
                                const isConfirmed = confirm("Are you sure to log out?");
                                if (isConfirmed) {
                                    logout();
                                }
                            }} className={"cursor-pointer"}>
                                <IconComponent iconName={"user"} width={24} height={24} title={"Logout"}
                                               titleClassName={"text-NestMartTextBody hidden xl:block"}/>
                            </li>

                    }
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
