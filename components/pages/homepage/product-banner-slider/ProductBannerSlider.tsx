import {bannerSlidesMock} from "@/mock/productSliderBanner";
import {IconComponent, ImageComponent} from "@/components";
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay} from "swiper/modules";

export function ProductBannerSlider() {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1920: {
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                }}
            >
                {
                    bannerSlidesMock.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div style={{backgroundColor: item.bgColor, backgroundImage: `url(${item.imgSrc})`}}
                                     className={`banner-slide`}>
                                    <div className="z-20 flex flex-col gap-10 items-start px-6 xl:px-0 xl:gap-4">
                                        <p className="w-2/3 xl:text-2xl xl:w-7/12">{item.text}</p>
                                        <button className={`banner-btn ${item.btnColorClass}`}>{item.btnText}
                                            <IconComponent iconName={"arrow-small-right"} width={12} height={10}/>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
        ;
}