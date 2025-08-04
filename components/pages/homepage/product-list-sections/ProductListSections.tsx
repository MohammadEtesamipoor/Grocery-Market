import {ProductListSection} from "@/components/common/product";
import {productListSectionMock} from "@/mock/productListSectionMock";
import {Swiper, SwiperSlide} from "swiper/react";

interface Props {

}

export function ProductListSections({}: Props) {
    return (
        <div className={"flex justify-between gap-6"}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    760: {
                        slidesPerView: 2,
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
                    productListSectionMock.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductListSection data={item.products} title={item.title}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    );
}