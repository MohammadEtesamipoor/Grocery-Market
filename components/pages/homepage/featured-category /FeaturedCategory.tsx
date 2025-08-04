import {featuredCategoriesMock} from "@/mock/featuredCategory";
import {useQuery} from "@tanstack/react-query";
import {getFeatureCategory} from "@/api/category/getFeatureCategory";
import {EntityDataType, Response} from "@/types/Api/Response";
import {CategoryItemType} from "@/types/Api/CategoryItem";
import {ImageComponent} from "@/components";

export function FeaturedCategory() {
    const {data: featureCategory} = useQuery<Response<CategoryItemType>>({
        queryKey: ["getFeatureCategory"],
        queryFn: () => getFeatureCategory()
    });
    return (
        <>
            <h2 className="text-2xl lg:text-3xl mb-5 lg:mb-11 font-bold text-NestMartTextHeading">Featured Categories</h2>
            <div className="flex flex-col gap-11">
                <div id="featured-category"
                     className="grid grid-cols-3 gap-5 lg:flex lg:flex-wrap lg:justify-center 2xl:flex-nowrap 2xl:justify-between">
                    {
                        featureCategory?.data.map((itemCategory: EntityDataType<CategoryItemType>) => (
                            <div
                                style={{
                                    backgroundColor: itemCategory.attributes.thumbnail?.data?.attributes.url ? itemCategory.attributes.color : "white",
                                    border: "1px solid #d3d3d3",
                                }}
                                key={itemCategory.id} className="featured-item">
                                <ImageComponent src={(itemCategory.attributes.thumbnail?.data?.attributes.url ?? "")}
                                                alt={itemCategory.attributes.title}
                                                width={110} height={84} className={'object-none'}
                                />
                                <p className="font-bold text-xs text-NestMartTextHeading ">{itemCategory.attributes.title}</p>
                                <p className="text-xs text-NestMartTextMuted ">{itemCategory.attributes.product_count}</p>
                            </div>
                        ))
                    }
                    {/*Use Mock Api*/}
                    {/* {*/}
                    {/*    featuredCategoriesMock.map((featuredCategory) => (*/}
                    {/*        <div*/}
                    {/*            style={{*/}
                    {/*                backgroundColor: featuredCategory.lightColor,*/}
                    {/*            }}*/}
                    {/*            key={featuredCategory.id} className="featured-item">*/}
                    {/*            <img src={featuredCategory.imgSrc} alt={featuredCategory.alt}/>*/}
                    {/*            <p className="font-bold text-xs text-NestMartTextHeading">{featuredCategory.title}</p>*/}
                    {/*            <p className="text-xs text-NestMartTextMuted">{featuredCategory.itemCount}</p>*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
        </>
    );
}