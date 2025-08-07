import {Swiper, SwiperSlide} from "swiper/react";
import {DealsProductCard} from "@/components/common/product";
import {EntityDataType} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Props {
    title: string;
    sliderData:  Array<EntityDataType<ProductType>>;
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
                    },
                }}
            >

                {
                    sliderData.map((item:EntityDataType<ProductType>) => (
                        <SwiperSlide key={item.id} className={"mb-5"}>
                            <DealsProductCard data={item.attributes}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}