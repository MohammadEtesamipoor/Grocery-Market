import React from 'react';
import {IconComponent, ImageComponent, Logo} from "@/components";
import Link from "next/link";


export function Footer() {
    //TODO fix mobile menu
    return (
        <footer className="">
            <div className="container mt-8 flex gap-4 flex-col ">
                <div className="relative w-full h-40 lg:h-[538px] bg-[#d8f1e5] rounded-lg bg-hero object-cover
         text-NestMartTextHeading font-bold px-2 xl:px-20 xl:flex-col xl:justify-center xl:items-start
          xl:gap-8 flex items-center overflow-hidden">
                    <p className="font-bold text-lg w-2/4 lg:mt-5 xl:mt-0  lg:text-5xl lg:leading-[60px] z-10 ">
                        Stay home & get <br className="xl:hidden"/>
                        your daily <br className="xl:hidden"/>
                        needs from our shop
                    </p>
                    <p className="hidden xl:inline-block text-NestMartTextBody text-xl">Start You'r Daily Sopping with
                        Nest
                        Mart</p>
                    <img
                        className="absolute top-0 right-0 h-full object-contain z-0 lg:bottom-0 md:object-bottom md:max-w-lg 2xl:max-w-none xl:right-5 xl:top-4"
                        src="/assets/images/bg-hero-main.png"
                        alt=""/>
                    <img className="hidden xl:block absolute  right-[26%]  object-contain z-0"
                         src="/assets/images/banner-hero1.png"
                         alt=""/>
                    <img className="hidden xl:block absolute  right-[36%] bottom-9  object-contain z-0"
                         src="/assets/images/banner-hero2.png"
                         alt=""/>
                    <img className="hidden xl:block absolute bottom-0 right-[43%] object-contain z-0 "
                         src="/assets/images/banner-hero3.png"
                         alt=""/>
                </div>
            </div>
            <div className="container mt-16 flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="contact-us ">
                    <div className="flex flex-col gap-4 ">
                        <Logo isMobile={true}/>
                        <p className="text-NestMartTextHeading">Pellentesque posuere orci lobortis</p>
                    </div>
                    <ul>
                        <li className={"flex items-baseline"}>
                            <IconComponent iconName={"call-icon"} width={16} height={16}/>
                            <p className="w-fit line-clamp-3"><span>Address:</span> 5171 W Campbell Ave <br
                                className="hidden lg:block"/>
                                undefined Kent, Utah 53127
                                United States</p>
                        </li>
                        <li className={"flex items-baseline"}>
                            <IconComponent iconName={"call-icon"} width={16} height={16}/>

                            <span>Call Us:</span> (+91) - 540-025-124553
                        </li>
                        <li className={"flex items-baseline"}>
                            <IconComponent iconName={"email-icon"} width={16} height={16}/>

                            <span>Email:</span> contact@nestmart.com
                        </li>
                        <li className={"flex items-baseline"}>
                            <IconComponent iconName={"clock-icon"} width={16} height={16}/>

                            <span>Hours:</span> 10:00 - 18:00, Mon - Sat
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="company">
                    <div className="accordion">
                        <button
                            className="accordionBtn flex  items-center gap-2.5 w-full mb-5 font-bold text-sm md:text-2xl md:mb-7 ">
                            Company
                            <IconComponent iconName={"arrow-right"} width={10} height={8}
                                           linkClassName={"accordionIcon fill-black rotate-90 md:hidden"}/>
                        </button>
                        <div className="relative ">
                            <ul className="accordionList flex flex-col gap-2.5 overflow-hidden lg:overflow-visible transition-all duration-1000 h-0 ">
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Delivery Information</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                                <li><Link href="#">Contact Us</Link></li>
                                <li><Link href="#">Support Center</Link></li>
                                <li><Link href="#">Careers</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="information">
                    <div className="accordion">
                        <button
                            className="accordionBtn flex  items-center gap-2.5 w-full mb-5 font-bold text-sm md:text-2xl md:mb-7 ">
                            Information
                            <IconComponent iconName={"arrow-right"} width={10} height={8}
                                           linkClassName={"accordionIcon fill-black rotate-90 md:hidden"}/>
                        </button>
                        <div className="relative ">
                            <ul className="accordionList flex flex-col gap-2.5 overflow-hidden lg:overflow-visible transition-all duration-1000 h-0">
                                <li><Link href="#">Search Terms</Link></li>
                                <li><Link href="#">Advanced Search</Link></li>
                                <li><Link href="#">Help & FAQ's</Link></li>
                                <li><Link href="#">Store Location</Link></li>
                                <li><Link href="#">Orders & Returns</Link></li>
                                <li><Link href="#">Feedback for us</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr/>
                <div className="flex flex-col gap-4 text-NestMartTextHeading">
                    <p className="font-bold">App & Payment</p>
                    <p className="text-NestMartTextBody text-sm">Install NetMart App from App Store or Google Play</p>
                    <div
                        className="flex gap-4 justify-center md:justify-start lg:flex-col xl:flex-row lg:items-baseline">
                        <ImageComponent src={"/assets/images/app-store.png"} alt={"app store"} width={131} height={38}/>
                        <ImageComponent src={"/assets/images/google-store.png"} alt={"google store"} width={131}
                                        height={38}/>
                    </div>
                    <p className="text-NestMartTextBody text-sm">Secured Payment Gateways</p>
                    <ImageComponent src={"/assets/images/payment-method%201.png"} alt={"payment method"} width={342}
                                    height={33}/>
                </div>
            </div>
            <hr className="my-4 mt-8  lg:mt-28 container"/>
            <p className="w-full text-center text-sm text-NestMartTextHeading mb-8 font-bold"> All rights reserved </p>
        </footer>
    );
}
