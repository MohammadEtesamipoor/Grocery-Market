import {ImageComponent, Rating} from "@/components";

import {ProductType} from "@/types/Api/Product";
import useTimer from "@/hooks/use-timer";

// interface Props {
//     data: {
//         id: number;
//         imgSrc: string;
//         days: number;
//         title: string;
//         rating: number;
//         weight: string;
//         priceCurrent: number;
//         priceOld: number;
//     }
// }

interface Props {
    data:ProductType
}

export function DealsProductCard({data}: Props) {
    const { days, hours, minutes, seconds } = useTimer(data.discount_expire_date);

    return (
        <>
            <ImageComponent className={"product-cart-offer-img object-center"} src={data.thumbnail?.data?.attributes.url} alt={data.title}
                            width={378} height={335}/>
            <div className=" flex gap-6 justify-center lg:mt-28 ">
                <div className="offer-time bg-white rounded-md px-3 py-2 flex flex-col justify-center"
                     data-offer-time="2" data-type="day">
                    <p className="offer-time-number">{days}</p>
                    <span className="offer-time-text ">Days</span>
                </div>
                <div className="offer-time bg-white rounded-md px-3 py-2 flex flex-col justify-center "
                     data-type="hour">
                    <p className="offer-time-number">{hours}</p>
                    <span className="offer-time-text ">Hours</span>
                </div>
                <div className="offer-time bg-white rounded-md px-3 py-2 flex flex-col justify-center"
                     data-type="min">
                    <p className="offer-time-number">{minutes}</p>
                    <span className="offer-time-text ">Mins</span>
                </div>
                <div className="offer-time bg-white rounded-md px-3 py-2 flex flex-col justify-center"
                     data-type="sec">
                    <p className="offer-time-number">{seconds}</p>
                    <span className="offer-time-text ">Sec</span>
                </div>
            </div>
            <div className="product-cart-offer ">
                <p className="text-sm font-bold text-NestMartTextHeading min-h-10">{data.title}</p>
                <div className="flex flex-col ">
                    <div className="rating">
                        <Rating rating={data.rate}/>
                    </div>
                    <p className="text-xs text-NestMartTextBody">{data.weight}</p>
                </div>
                <div className="flex justify-between w-full items-center gap-4">
                    <div className="flex gap-1 font-bold items-end">
                        <p className="text-NestMartBrand1 text-xl font-bold">${data.price}</p>
                        <p className="text-NestMartTextBody text-xs line-through ">${data.sell_price}</p>
                    </div>
                    <input
                        className="count-product flex items-center justify-center text-center w-16 h-6 font-bold text-sm placeholder-NestMartBrand1 text-NestMartBrand1 bg-[#DEF9EC] rounded-[4px]  cursor-pointer"
                        type="text"
                        name="count-product"
                        placeholder="Add +"/>
                </div>
            </div>
        </>
    );
}

