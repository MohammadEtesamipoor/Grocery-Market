import {IconComponent} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {SimpleProductCard} from "@/components/common/product";
import {EntityDataType} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Props {
    title: string;
    sliderData: Array<EntityDataType<ProductType>>;
}

export function BestSellersSlider({sliderData, title}: Props) {
    return (
        <div>

            <h2 className="text-3xl mb-5 lg:mb-11 font-bold text-NestMartTextHeading ">{title}</h2>
            <div className="flex gap-5 2xl:gap-6 w-full">
                <div
                    className="relative bg-[#3BB77E] rounded-3xl  bg-right-bottom bg-no-repeat bg-cover hidden xl:block lg:max-w-72 2xl:max-w-96"
                    style={{backgroundImage: `url(/assets/images/bg-banner-off.png)`}}
                >
                    <div className=" flex flex-col items-start justify-between w-full h-full py-6 px-11">
                        <p className="w-11/12 lg:w-full 2xl:w-9/12 lg:text-4xl leading-10 font-bold text-NestMartTextHeading">Bring
                            nature into your home </p>
                        <button className="banner-btn bg-NestMartBrand2">Shop Now
                            <IconComponent iconName={"arrow-small-right"} width={12} height={10}/>
                        </button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        370: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1632: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        sliderData.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <SimpleProductCard data={slide.attributes}/>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    );
}


