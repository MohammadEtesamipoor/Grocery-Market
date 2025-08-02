import {SimpleProductCard} from "@/components/common/product";
import {IconComponent} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {bannerSlidesMock} from "@/mock/productSliderBanner";
import {productSlidesMock} from "@/mock/productMock";

interface Props {
    title: string;
    sliderData: Array<any>;
}

export function SimpleProductSlider({sliderData, title}: Props) {
    return (
        <div>
            <div className="flex items-baseline justify-between container cursor-pointer pl-0">
                <h2 className="text-3xl mb-5 lg:mb-11 font-bold text-NestMartTextHeading ">{title}</h2>
                <div className="flex items-center gap-2">
                    <div
                        className={`${title.split(" ")[1].toLowerCase()}-swiper-nav-left bg-gray-100 rounded-full p-4 hover:bg-NestMartBrand1 group`}>
                        <IconComponent className={" rotate-180 fill-NestMartTextBody group-hover:fill-white "}
                                       iconName={"arrow-right"}
                                       width={10} height={12}/>
                    </div>
                    <div
                        className={`${title.split(" ")[1].toLowerCase()}-swiper-nav-right bg-gray-100 rounded-full p-4 hover:bg-NestMartBrand1 group`}>
                        <IconComponent className={"fill-NestMartTextBody group-hover:fill-white"}
                                       iconName={"arrow-right"} width={10}
                                       height={12}/>
                    </div>
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: `.${title.split(" ")[1].toLowerCase()}-swiper-nav-left`,
                        nextEl: `.${title.split(" ")[1].toLowerCase()}-swiper-nav-right`,
                    }}
                    breakpoints={{
                        370: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1920: {
                            slidesPerView: 5,
                            initialSlide: 1
                        },
                    }}
                >
                    {
                        sliderData.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <SimpleProductCard data={slide}/>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    );
}