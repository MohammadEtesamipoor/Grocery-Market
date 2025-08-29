import React from 'react';
import {useCart} from '@/store/Cart';
import Link from 'next/link';

export default function CartPage(){
    const {items, totalItems, totalPrice, updateQuantity, removeItem, clearCart} = useCart();

    if(items.length === 0) return (
        <div className="container py-12">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <Link href="/">Go shopping</Link>
        </div>
    )

    return (
        <div className="container py-12">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart ({totalItems})</h2>
            <div className="grid grid-cols-1 gap-4">
                {items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between border p-4 rounded">
                        <div>
                            <div className="font-bold">{(it.product as any).title ?? (it.product as any).attributes?.title}</div>
                            <div className="text-sm text-NestMartTextBody">Qty: <input type="number" value={it.quantity} onChange={(e)=> updateQuantity((it.product as any).id ?? (it.product as any).attributes?.id, Number(e.target.value))} className="w-16"/></div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold">${((it.product as any).attributes?.price ?? (it.product as any).price ?? 0) * it.quantity}</div>
                            <div className="flex gap-2 mt-2 justify-end">
                                <button onClick={()=> removeItem((it.product as any).id ?? (it.product as any).attributes?.id)} className="px-3 py-1 border rounded">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <div className="text-lg">Total: <span className="font-bold">${totalPrice}</span></div>
                <div className="flex gap-2">
                    <button onClick={()=> clearCart()} className="px-4 py-2 border rounded">Clear</button>
                    <button className="px-4 py-2 bg-NestMartBrand1 text-white rounded">Checkout</button>
                </div>
            </div>
        </div>
    )
}


