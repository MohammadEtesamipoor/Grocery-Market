import React from 'react';
import {ProductType} from '@/types/Api/Product';
import {useCart} from '@/store/Cart';
import {IconComponent} from '@/components';
import {toast} from 'react-toastify';

interface Props {
    product: ProductType;
    quantity?: number;
    className?: string;
    children?: React.ReactNode;
    onAdded?: () => void;
}

export function AddToCartButton({product, quantity = 1, className = 'cart-btn', children, onAdded}: Props) {
    const { addItem } = useCart();
    const handle = () => {
        addItem(product, quantity);
        toast.success('Added to cart');
        onAdded && onAdded();
    };

    return (
        <button onClick={handle} className={className}>
            <IconComponent className={"fill-white"} iconName={"cart"} width={16} height={16}/>
            {children ?? 'Add To Cart'}
        </button>
    );
}

export default AddToCartButton;


