import {ProductCardList} from "@/components/common/product";
import {EntityDataType} from "@/types/Api/Response";
import {ProductType} from "@/types/Api/Product";

interface Props {
    title: string;
    data: Array<EntityDataType<ProductType>>;
}

export function ProductListSection({title, data}: Props) {
    return (
        <div className={"w-fit"}>
            <div className="mb-5 xl:mb-10">
                <h2 className="font-bold xl:text-2xl text-NestMartTextHeading leading-8">{title}</h2>
            </div>
            <div className="list-top-products">
                {
                    data.map((item:EntityDataType<ProductType>) => {
                        return <ProductCardList key={item.id} data={item.attributes}/>
                    })
                }
            </div>
        </div>
    );
}