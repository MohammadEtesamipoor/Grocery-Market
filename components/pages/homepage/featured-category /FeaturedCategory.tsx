import {featuredCategoriesMock} from "@/mock/featuredCategory";

interface Props {

}

export function FeaturedCategory({}: Props) {
    return (
        <div className="flex flex-col gap-11">
            <div id="featured-category"
                 className="grid grid-cols-3 gap-5 lg:flex lg:flex-wrap lg:justify-center 2xl:flex-nowrap 2xl:justify-between">
                {
                    featuredCategoriesMock.map((featuredCategory) => (
                        <div
                            style={{
                                backgroundColor: featuredCategory.lightColor,
                            }}
                            key={featuredCategory.id} className="featured-item">
                            <img src={featuredCategory.imgSrc} alt={featuredCategory.alt}/>
                            <p className="font-bold text-xs text-NestMartTextHeading">{featuredCategory.title}</p>
                            <p className="text-xs text-NestMartTextMuted">{featuredCategory.itemCount}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}