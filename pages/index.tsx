import {
    Banner,
    DealsDaysSlider,
    FeaturedCategory,
    ProductBannerSlider, ProductListSections,
    Section
} from "@/components";
import {BestSellersSlider, SimpleProductSlider} from "@/components/common/product";
import {dealsDaysMock} from "@/mock/dealsDaysMock";
import {useQuery} from "@tanstack/react-query";
import {Response} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";
import {getAllProducts} from "@/api/product/getAllProducts";

export default function Home() {
    const {data: popularProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "popularProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filter: "is_popular"})
    });
    const {data: fruitProductData} = useQuery<Response<ProductType>>({
        queryKey: ["getAllProducts", "fruitProductData"],
        queryFn: () => getAllProducts({populate: ["categories", "thumbnail"], filter: "is_popular_fruit"})
    });

    return (
        <div>
            <Section>
                <Banner title={"Don’t miss amazing grocery deals"} subtitle={"Sign up for the daily newsletter"}
                        image={"/assets/images/bg-hero-desktop.png"}
                        bgImage={"/assets/images/bg-design-hero-main.png"}/>
            </Section>
            <Section>
                <FeaturedCategory/>
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
            {/*<Section>*/}
            {/*    <BestSellersSlider sliderData={OfferProductSlidesMock} title={"Our-offers"}/>*/}
            {/*</Section>*/}
            {/*<Section>*/}
            {/*    <DealsDaysSlider sliderData={dealsDaysMock} title={"Deals Of The Days"}/>*/}
            {/*</Section>*/}
            <Section>
                <ProductListSections/>
            </Section>
        </div>
    );
}
