import {Swiper, SwiperSlide} from "swiper/react";
import {DealsProductCard} from "@/components/common/product";

interface Props {
    title: string;
    sliderData: Array<any>;
}

export function DealsDaysSlider({sliderData, title}: Props) {
    return (
        <div>
            <h2 className="text-3xl mb-5 lg:mb-11 font-bold text-NestMartTextHeading ">{title}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    370: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1920: {
                        slidesPerView: 4,
                        initialSlide: 1
                    },
                }}
            >

                {
                    sliderData.map((item) => (
                        <SwiperSlide key={item.id} className={"mb-5"}>
                            <DealsProductCard data={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}