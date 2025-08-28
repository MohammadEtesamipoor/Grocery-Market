import React, {createContext, useContext, useEffect, useState} from "react";
import {ProductType} from "@/types/Api/Product";

type CartItem = {
    product: ProductType;
    quantity: number;
};

interface CartContextType {
    items: CartItem[];
    addItem: (product: ProductType, quantity?: number) => void;
    removeItem: (productId: string | number) => void;
    updateQuantity: (productId: string | number, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    totalItems: 0,
    totalPrice: 0,
});

export const useCart = () => useContext(CartContext);

export function CartProvider({children}: {children: React.ReactNode}) {
    const [items, setItems] = useState<CartItem[]>(() => {
        if (typeof window === 'undefined') return [];
        try {
            const raw = window.localStorage.getItem('cart');
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage.setItem('cart', JSON.stringify(items));
        } catch (e) {
            // ignore
        }
    }, [items]);

    const addItem = (product: ProductType, quantity = 1) => {
        setItems(prev => {
            const productId = (product as any).id ?? (product as any).attributes?.id;
            const idx = prev.findIndex(i => (i.product as any).id === productId || (i.product as any).attributes?.id === productId);
            if (idx > -1) {
                const copy = [...prev];
                copy[idx].quantity += quantity;
                return copy;
            }
            return [...prev, {product, quantity}];
        });
    };

    const removeItem = (productId: string | number) => {
        setItems(prev => prev.filter(i => !((i.product as any).id === productId || (i.product as any).attributes?.id === productId)));
    };

    const updateQuantity = (productId: string | number, quantity: number) => {
        if (quantity <= 0) return removeItem(productId);
        setItems(prev => prev.map(i => ((i.product as any).id === productId || (i.product as any).attributes?.id === productId) ? {...i, quantity} : i));
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((s, it) => s + it.quantity, 0);
    const totalPrice = items.reduce((s, it) => {
        const price = (it.product as any).attributes?.price ?? (it.product as any).price ?? 0;
        const sellPrice = (it.product as any).attributes?.sell_price ?? (it.product as any).sell_price ?? null;
        return s + (sellPrice ?? price) * it.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;


