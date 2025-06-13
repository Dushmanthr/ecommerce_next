'use client';

import Stripe from 'stripe';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {useCartStore} from '@/store/cart-store';

interface Props {
    product: Stripe.Product;
}



export const ProductDetails = ({product}: Props) => {
    const {items, addItem, updateQuantity} = useCartStore();
    const price = product.default_price as Stripe.Price;
    const cartItem = items.find((item) => item.id === product.id);
    const  quantity = cartItem ? cartItem.quantity : 0;

     const onAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            imageUrl: product.images ? product.images[0] : '',
            price: price.unit_amount as number,
            quantity: 1
        })
    } 

    const onIncreaseQuantity = () => {
    if (cartItem) {
        updateQuantity(product.id, quantity + 1);
    } 
}

const onDecreaseQuantity = () => {
    if (cartItem && quantity > 0) {
        updateQuantity(product.id, quantity - 1);
    }
}

    return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 items-start">
        {product.images && product.images[0] && (
            <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image 
                    src={product.images[0]}
                    alt={product.name}
                    layout="responsive"
                    width={600}
                    height={600}
                    objectFit="contain"
                    className="transition-transform duration-500 hover:scale-105"
                />
            </div>
        )}
        <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
            {product.description && (
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            )}
            {price && price.unit_amount && (
                <p className="text-2xl font-bold text-indigo-600">
                    ${(price.unit_amount / 100).toFixed(2)}
                </p>
            )}
            <div className="flex items-center gap-4">
                <Button 
                    variant="outline" 
                    onClick={onDecreaseQuantity}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
                >
                    -
                </Button>
                <span className="text-xl font-semibold text-gray-900">{quantity}</span>
                <Button 
                    onClick={onIncreaseQuantity}
                    className="w-12 h-12 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                    +
                </Button>
            </div>
            
            <Button 
                onClick={onAddItem}
                className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
            >
                Add to Cart
            </Button>
            
        </div>
    </div>
)
}