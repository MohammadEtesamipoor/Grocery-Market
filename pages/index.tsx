import {
    Banner, DealsDaysSlider,
    ProductBannerSlider, ProductListSections,
    Section
} from "@/components";
import {BestSellersSlider, SimpleProductSlider} from "@/components/common/product";
import {dealsDaysMock} from "@/mock/dealsDaysMock";
import {useQuery} from "@tanstack/react-query";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";
import {getAllProducts} from "@/api/product/getAllProducts";
import FeatureCategory from "@/components/pages/homepage/feature-catagory/FeaturedCategory";

export default function Home() {
    const {data: popularProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "popularProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filters: {is_popular:{$eq:true}}})
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
