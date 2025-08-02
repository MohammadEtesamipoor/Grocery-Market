import {Badge, IconComponent, ImageComponent, Rating, SoldBarProduct} from "@/components";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        label: string;
        labelClass: string;
        labelTextColor: string;
        imgSrc: string;
        alt: string;
        brand: string;
        title: string;
        rating: number;
        weight: number;
        unit: string;
        price: number;
        discountedPrice: number;
        labelType: string;
        sold: number,
        total: number
    }
}


export function SimpleProductCard({data}: Props) {

    return (
        <div className={"max-w-40 md:max-w-72"}>
            <div className="product-cart">
                <Badge badge={data.label} price={data.price} discountedPrice={data.discountedPrice}/>
                <ImageComponent src={data.imgSrc} alt={data.alt} width={240} height={170}
                                className={"object-center m-auto"}/>
                <p className="text-xs text-NestMartTextBody">{data.brand}</p>
                <Link href={"/"}><h3 className="sliceText text-xs font-bold text-NestMartTextHeading">{data.title}</h3>
                </Link>
                <div className="flex flex-col ">
                    <Rating rating={data.rating}/>
                    <p className="text-xs text-NestMartTextBody">{data.weight} {data.unit}</p>
                </div>
                <div className="flex justify-between w-full items-center gap-4">
                    <div className="flex gap-1 font-bold items-end">
                        <p className="text-NestMartBrand1 text-sm md:text-xl">${data.price}</p>
                        <p className="text-NestMartTextBody text-xs line-through ">${data.discountedPrice}</p>
                    </div>
                    {!data.sold &&
                        <input
                            className="count-product flex items-center justify-center text-center w-6 h-6 text-NestMartBrand1 bg-[#DEF9EC] rounded-[4px] max-w-fit cursor-pointer"
                            type="text"
                            name="count-product"
                            placeholder="+"/>}
                </div>
                {
                    data.sold && <>
                        <SoldBarProduct sold={data.sold} total={data.total}/>
                        <button className="cart-btn">
                            <IconComponent className={"fill-white"} iconName={"cart"} width={16} height={16}/>
                            Add To Cart
                        </button>
                    </>
                }

            </div>
        </div>
    )
        ;
}


