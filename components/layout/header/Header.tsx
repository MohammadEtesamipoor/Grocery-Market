import React, {useEffect, useState} from 'react';
import {IconComponent, Login, Logo, SearchForm, Modal} from "@/components";
import {useModal} from "@/store/ModalContext";
import {useOverlay} from "@/hooks/use-overlay";
import {useAuth} from "@/store/Auth";


interface HeaderProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({showMenu, setShowMenu}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handelStateMenu = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <header className={`sticky top-0 z-40 bg-white xl:mt-8 xl:flex xl:flex-col xl:gap-8 ${isScrolled ? 'border-b-2 border-NestMartBorder1' : ''}`}>
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

                            <>
                                <li onClick={(e)=>{
                                    e.stopPropagation()
                                    setShowLogoutConfirm(true)
                                }} className={"cursor-pointer"}>
                                    <IconComponent iconName={"user"} width={24} height={24} title={"Logout"}
                                                   titleClassName={"text-NestMartTextBody hidden xl:block"}/>
                                </li>
                                {showLogoutConfirm && (
                                    <Modal>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-NestMartTextHeading mb-4">Are you sure you want to log out?</h3>
                                            <p className="text-sm text-NestMartTextBody mb-6">You will be logged out from your account.</p>
                                            <div className="flex justify-end gap-3">
                                                <button onClick={() => setShowLogoutConfirm(false)} className="px-4 py-2 rounded border border-gray-300">Cancel</button>
                                                <button onClick={() => { logout(); setShowLogoutConfirm(false); }} className="px-4 py-2 rounded bg-NestMartBrand1 text-white">Log out</button>
                                            </div>
                                        </div>
                                    </Modal>
                                )}
                            </>

                    }
                    <li className={"cursor-pointer"}>
                        <IconComponent className={"fill-NestMartTextHeading "} iconName={"cart"} badge={4} width={24}
                                       titleClassName={"text-NestMartTextBody hidden xl:block"}
                                       height={24}
                                       title={"Cart"}/>
                    </li>
                </ul>
            </div>
            {/* Menu is rendered outside header so it doesn't stick with the header */}
        </header>
    );
}
