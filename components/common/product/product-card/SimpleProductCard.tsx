import {Badge, IconComponent, ImageComponent, Rating, SoldBarProduct} from "@/components";
import Link from "next/link";
import {ProductType} from "@/types/Api/Product";
import {ChangeEvent, useState} from "react";

interface Props {
    data: ProductType;
}


export function SimpleProductCard({data}: Props) {
    const [productCount, setProductCount] = useState<any>('');

    const handelInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[0-9]+$/.test(value)) {
            setProductCount(value);
        }
    }
    const handelClickValue = () => {
        if (productCount == 0) {
            setProductCount("");

        } else if (!Number(productCount))
            setProductCount(1)

        if (productCount == "") setProductCount(1)

    }
    return (
        <div className={"w-40 md:w-72 mb-1.5 lg:mb-0"}>
            <div className="product-cart">
                {
                    data &&
                    <>
                        {data.label && <Badge badge={data.label} price={data.price} discountedPrice={data.sell_price}/>}
                        <ImageComponent src={data.thumbnail?.data?.attributes.url} alt={data.title} width={240}
                                        height={170}
                                        className={"object-center m-auto"}/>
                        <p className="text-xs text-NestMartTextBody min-h-3">{data.categories?.data?.[0]?.attributes?.title ?? ""}</p>
                        <Link href={"/"}><h3
                            className="line-clamp-2 lg:min-h-[2.4rem] text-xs font-bold text-NestMartTextHeading">{data.title}</h3>
                        </Link>
                        <div className="flex flex-col ">
                            <Rating rating={data.rate}/>
                            <p className="text-xs text-NestMartTextBody">{data.weight} {data.unit}</p>
                        </div>
                        <div className="flex justify-between w-full items-center gap-4">
                            <div className="flex flex-row gap-0.5  lg:gap-1.5 font-bold items-end">
                                <p className="text-NestMartBrand1 text-sm md:text-xl">$ {data.price}</p>
                                <p className="text-NestMartTextBody text-xs line-through ">{data.sell_price ? `$ ${data.sell_price}` : ""}</p>
                            </div>
                            {!data.sold &&
                                <input
                                    className={`count-product flex items-center justify-center text-center lg:w-16 w-6 h-6 text-NestMartTextHeading bg-[#DEF9EC] rounded-[4px] max-w-fit cursor-pointer
                                    ${productCount ? "" : "no-arrow-btn"}
                                    
                                    `}
                                    type="number"
                                    name="count-product"
                                    value={productCount}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handelInputValue(e)}
                                    onClick={handelClickValue}
                                    placeholder="Add +"/>}
                        </div>
                        {
                            data.sold && <>
                                <SoldBarProduct sold={data.sold} total={Number(data.total)}/>
                                <button className="cart-btn">
                                    <IconComponent className={"fill-white"} iconName={"cart"} width={16} height={16}/>
                                    Add To Cart
                                </button>
                            </>
                        }
                    </>
                }

            </div>
        </div>
    )
        ;
}


