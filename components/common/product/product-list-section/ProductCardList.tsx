import {ImageComponent, Rating} from "@/components";

interface Props {
    productData:{
        id: number
        img: string
        name: string
        oldPrice: number
        price: number
        rating: number
    }
}

export function ProductCardList({productData}: Props) {
    return (
        <div className="top-product">
            <ImageComponent src={productData.img} alt={""} width={132} height={132} />
            <div className="top-product-info">
                <p className="top-product-slice-text">{productData.name}</p>
                <div className="rating">
                    <Rating rating={productData.rating}/>
                </div>
                <div className="flex gap-1 font-bold items-end">
                    <p className="text-NestMartBrand1 text-xl">${productData.price}</p>
                    <p className="text-NestMartTextBody text-xs line-through ">${productData.oldPrice}</p>
                </div>
            </div>
        </div>

    );
}