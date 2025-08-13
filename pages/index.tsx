import {
    Banner, DealsDaysSlider,
    ProductBannerSlider, ProductListSections,
    Section
} from "@/components";
import {BestSellersSlider, SimpleProductSlider} from "@/components/common/product";
import {dealsDaysMock} from "@/mock/dealsDaysMock";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";
import {getAllProducts} from "@/api/product/getAllProducts";
import FeatureCategory from "@/components/pages/homepage/feature-catagory/FeaturedCategory";
import {getMenu} from "@/api/menu/getMenu";
import {getFeatureCategory} from "@/api/category/getFeatureCategory";

export default function Home() {
    const {data: popularProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "popularProductData"],
        queryFn: () =>getAllProducts({populate: ["categories", "thumbnail"], filters: {is_popular:{$eq:true}}})
    });
    const {data: fruitProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "fruitProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {is_popular_fruit:{$eq:true}}})
    });
    const {data: bestSellerProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "bestSellerProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {is_best_seller:{$eq:true}}})
    });

    const {data: dealsOfDayData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "dealsOfDayData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {discount_expire_date:{$notNull:true}}})
    });
    return (
        <div>
            <Section>
                <Banner title={"Don’t miss amazing grocery deals"} subtitle={"Sign up for the daily newsletter"}
                        image={"/assets/images/bg-hero-desktop.png"}
                        bgImage={"/assets/images/bg-design-hero-main.png"}/>
            </Section>
            <Section>
                <FeatureCategory/>
            </Section>
            <Section>
                <ProductBannerSlider/>
            </Section>
            <Section>
                {popularProductData &&
                    <SimpleProductSlider sliderData={popularProductData.data} title={"Popular Products"}/>}
            </Section>
            <Section>
                {fruitProductData && <SimpleProductSlider sliderData={fruitProductData.data} title={"Popular Fruits"}/>}
            </Section>
            <Section>
                {bestSellerProductData &&
                    <BestSellersSlider sliderData={bestSellerProductData.data} title={"Our-offers"}/>}
            </Section>
            <Section>
                { dealsOfDayData && <DealsDaysSlider sliderData={dealsOfDayData.data} title={"Deals Of The Days"}/>}
            </Section>
            <Section>
                <ProductListSections/>
            </Section>
        </div>
    );
}


export async function getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["getMenu"],
        queryFn: getMenu
    })

    await queryClient.prefetchQuery({
        queryKey: ["getFeatureCategory"],
        queryFn: () => getFeatureCategory()
    })

    await queryClient.prefetchQuery({
        queryKey: ["getAllProducts", "dealsOfDayData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {discount_expire_date:{$notNull:true}}})
    })

    await queryClient.prefetchQuery({
        queryKey: ["getAllProducts", "bestSellerProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {is_best_seller:{$eq:true}}})
    })

    await queryClient.prefetchQuery({
        queryKey: ["getAllProducts", "fruitProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {is_popular_fruit:{$eq:true}}})
    })

    await queryClient.prefetchQuery({
        queryKey: ["getAllProducts", "popularProductData"],
        queryFn: () =>getAllProducts({populate: ["categories", "thumbnail"], filters: {is_popular:{$eq:true}}})
    })


    await queryClient.prefetchQuery({
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
    })

    await queryClient.prefetchQuery({
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
    })

    await queryClient.prefetchQuery({
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
    })

    await queryClient.prefetchQuery({
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
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}