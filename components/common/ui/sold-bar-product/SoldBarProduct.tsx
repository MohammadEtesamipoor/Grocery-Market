interface Props {
    sold: number;
    total: number;
}

export function SoldBarProduct({sold, total}: Props) {
    return (
        <div className="sold-products flex gap-1 flex-col" data-sold="30/120">
            <div className={"w-full bg-NestMartBorder1 h-1 rounded-full relative"}>
                <div
                    style={{
                        width: `${Math.round((sold / total) * 100)}%`,
                    }}
                    className={` bg-NestMartBrand1 h-1 rounded-full`}></div>
            </div>
            <p className={"text-NestMartTextHeading text-xs"}>Sold: {sold}/{total}</p>
        </div>
    );
}