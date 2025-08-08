import {ProductListSection} from "@/components/common/product";
import {productListSectionMock} from "@/mock/productListSectionMock";
import {Swiper, SwiperSlide} from "swiper/react";
import {useQuery} from "@tanstack/react-query";
import {getAllProducts} from "@/api/product/getAllProducts";

interface Props {

}

export function ProductListSections({}: Props) {
    const {data:TrendingProductsData}=useQuery({
        queryKey: ["getAllProducts", "TrendingProductsData"],
        queryFn: () => getAllProducts(
            {
                populate: ["categories", "thumbnail"],
                filters: {is_trending:{$eq:true}},
                pagination:{
                    page:1,
                    pageSize:3,
                }
            }),
    });
    const {data:TopSellingData}=useQuery({
        queryKey: ["getAllProducts", "TopSellingData"],
        queryFn: () => getAllProducts(
            {
                populate: ["categories", "thumbnail"],
                filters: {is_top_selling:{$eq:true}},
                pagination:{
                    page:1,
                    pageSize:3,
                }
            }),
    });
    const {data:RecentlyAddedData}=useQuery({
        queryKey: ["getAllProducts", "RecentlyAddedData"],
        queryFn: () => getAllProducts(
            {
                populate: ["categories", "thumbnail"],
                filters: {is_popular:{$eq:true}},
                pagination:{
                    page:1,
                    pageSize:3,
                }
            }),
    });
    const {data:TopRatedData}=useQuery({
        queryKey: ["getAllProducts", "TopRatedData"],
        queryFn: () => getAllProducts(
            {
                populate: ["categories", "thumbnail"],
                sort:["rate:desc"],
                pagination:{
                    page:1,
                    pageSize:3,
                    withCount:false
                }
            }),
    });

    return (
        <div className={"flex justify-between gap-6"}>
            <Swiper
                className={"grow"}
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
                <>
                    <SwiperSlide>
                        {
                            TrendingProductsData?.data &&
                            <ProductListSection data={TrendingProductsData?.data} title={"Trending Products"}/>
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            TopSellingData?.data &&
                            <ProductListSection data={TopSellingData?.data} title={"Top Selling"}/>
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            RecentlyAddedData?.data &&
                            <ProductListSection data={RecentlyAddedData?.data} title={"Recently Added"}/>
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            TopRatedData?.data &&
                            <ProductListSection data={TopRatedData?.data} title={"Top Rated"}/>
                        }
                    </SwiperSlide>
                </>
                {/*{*/}
                {/*    productListSectionMock.map((item, index) => {*/}
                {/*        return (*/}
                {/*            <SwiperSlide key={index}>*/}
                {/*                <ProductListSection data={item.products} title={item.title}/>*/}
                {/*            </SwiperSlide>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </Swiper>

        </div>
    );
}