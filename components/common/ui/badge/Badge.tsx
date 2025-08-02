interface Props {
    badge?: string,
    price?: number,
    discountedPrice?: number,
}

const labelCardColor: Record<string, string> = {
    hot: 'NestMartDanger',
    sale: 'NestMartBrand2',
    discount: 'NestMartBrand1',
}

export function Badge({badge, price, discountedPrice}: Props) {
    const lowerBadge = badge?.toLowerCase();
    const colorClass = labelCardColor[lowerBadge!] || 'NestMartDefault'; // مقدار پیشفرض مثلاً

    let badgeContent;
    if (lowerBadge === "discount" && price && discountedPrice) {
        badgeContent = <span>{Math.round((1 - discountedPrice / price) * 100)}%</span>
    } else {
        badgeContent = <span>{badge}</span>
    }

    return (
        <div className={`product-label bg-${colorClass}`}>
            {badgeContent}
        </div>
    );
}
