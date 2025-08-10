import {ImageComponent, Rating} from "@/components";
import {ProductType} from "@/types/Api/Product";


interface Props{
    data: ProductType;
}
// interface Props {
//     productData:{
//         id: number
//         img: string
//         name: string
//         oldPrice: number
//         price: number
//         rating: number
//     }
// }

export function ProductCardList({data}: Props) {
    return (
        <div className="top-product">
            <ImageComponent src={data.thumbnail?.data?.attributes.url} alt={""} width={100} height={100} className={"aspect-square w-20 md:w-fit object-contain"} />
            <div className="top-product-info">
                <p className="top-product-slice-text">{data.title}</p>
                <div className="rating">
                    <Rating rating={data.rate}/>
                </div>
                <div className="flex gap-1 font-bold items-end">
                    <p className="text-NestMartBrand1 text-xl">${data.price}</p>
                    <p className="text-NestMartTextBody text-xs line-through ">${data.sell_price}</p>
                </div>
            </div>
        </div>

    );
}