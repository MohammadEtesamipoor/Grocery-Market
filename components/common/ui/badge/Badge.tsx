interface Props {
    badge?: string,
    price?: number,
    discountedPrice?: number,
}

const labelCardColor = {
    hot: 'NestMartDanger',
    sale: 'NestMartBrand2',
    discount: 'NestMartBrand1',
}

export function Badge({badge, price, discountedPrice}: Props) {

    return (
        <div className={`product-label  bg-${labelCardColor[badge?.toLowerCase()]}`}>
            {
                badge?.toLowerCase() === "discount" ? <span>{Math.round((discountedPrice / price) * 100)}%</span> :
                    <span>{badge}</span>
            }
        </div>
    );
}