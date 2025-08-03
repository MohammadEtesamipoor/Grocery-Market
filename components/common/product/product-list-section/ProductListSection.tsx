import {ProductCardList} from "@/components/common/product";

interface Props {
    title: string;
    data: Array<any>;
}

export function ProductListSection({title, data}: Props) {
    return (
        <div className={"w-fit"}>
            <div className="mb-5 xl:mb-10">
                <h2 className="font-bold xl:text-2xl text-NestMartTextHeading leading-8">{title}</h2>
            </div>
            <div className="list-top-products">
                {
                    data.map((item,index) => {
                        return <ProductCardList key={item.id} productData={item}/>
                    })
                }
            </div>
        </div>
    );
}