import {
    Banner,
    DealsDaysSlider,
    FeaturedCategory,
    IconComponent,
    ImageComponent,
    ProductBannerSlider,
    Section
} from "@/components";
import {BestSellersSlider, SimpleProductSlider} from "@/components/common/product";
import {OfferProductSlidesMock, productSlidesMock} from "@/mock/productMock";
import {dealsDaysMock} from "@/mock/dealsDaysMock";

export default function Home() {
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
                <SimpleProductSlider sliderData={productSlidesMock} title={"Popular Products"}/>
            </Section>
            <Section>
                <SimpleProductSlider sliderData={productSlidesMock} title={"Popular Fruits"}/>
            </Section>
            <Section>
                <BestSellersSlider sliderData={OfferProductSlidesMock} title={"Our-offers"}/>
            </Section>
            <Section>
                <DealsDaysSlider sliderData={dealsDaysMock} title={"Deals Of The Days"}/>
            </Section>
        </div>
    );
}
