import {IconComponent, ImageComponent} from "@/components";

interface Props {
    title: string;
    subtitle: string;
    image: string;
    bgImage: string;
}

export function Banner({title, subtitle, image, bgImage}: Props) {
    //TODO should update form structure
    return (<div id="hero" className="flex gap-4 flex-col">
            <div
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
                className={`relative w-full h-40 lg:h-80 2xl:h-[538px] bg-[#FDC04033] rounded-lg  object-cover 
         text-NestMartTextHeading font-bold px-2 xl:px-20 xl:flex-col xl:justify-center xl:items-start xl:gap-8 flex items-center overflow-hidden`}>
                <p className="font-bold text-xl w-2/4 lg:text-4xl  2xl:text-7xl z-10 ">{title}</p>
                <p className="hidden xl:inline-block text-NestMartTextBody lg:text-xl 2xl:text-[30px]">{subtitle}</p>
                <div className="hidden py-3 px-6 bg-white rounded-[30px]
            xl:flex items-center justify-between relative">
                    <IconComponent iconName={"paper-plane"} width={16} height={16} className={"mr-2 z-50"}/>
                    <form className="flex justify-between flex-1" action="">
                        <input
                            className="bg-transparent text-xs outline-none text-NestMartTextBody mr-2 flex-1 w-96"
                            required
                            type="email"
                            name="email"
                            placeholder="Your email address"/>
                        <button className="bg-NestMartBrand1 font-bold absolute right-0 top-0 rounded-[30px] h-full text-white
                     py-2 px-4 flex justify-center items-center text-lg"
                                type="submit">Subscribe
                        </button>
                    </form>
                </div>
                <ImageComponent src={image} alt={"banner"} width={878}
                                height={536}
                                className={"absolute top-0 right-0 h-full object-cover z-0 max-w-52 lg:max-w-fit 2xl:max-w-none "}/>
            </div>

            <div
                className=" xl:hidden py-2.5 px-5 bg-NestMartBackground_grey1 rounded-[30px] flex items-center justify-between relative">
                <IconComponent iconName={"paper-plane"} width={16} height={16} className={"mr-2 z-50"}/>
                <form className="flex justify-between flex-1" action="">
                    <input className="bg-transparent text-xs outline-none text-NestMartTextBody mr-2 flex-1"
                           required
                           type="email"
                           name="email"
                           id="email" placeholder="Your email address"/>
                    <button
                        className="bg-NestMartBrand1 font-bold absolute right-0 top-0 rounded-[30px] h-full text-white py-2 px-4 flex justify-center items-center"
                        type="submit">Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}