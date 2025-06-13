'use client'

import { CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";

export default function CheckoutsPage() {
    const { items, removeItem, updateQuantity } = useCartStore();
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (total === 0 || items.length === 0) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h1>
                <p className="mt-4 text-gray-600">Explore our products and add some items to your cart!</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Checkout</h1>
            <Card className="shadow-xl rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-indigo-600">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-6">
                        {items.map((item, key) => (
                            <li key={key} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
                                <div className="flex-1">
                                    <span className="text-lg font-semibold text-gray-900">{item.name}</span>
                                    <p className="text-gray-600">
                                        ${((item.price * item.quantity) / 100).toFixed(2)} 
                                        <span className="text-sm"> ({item.quantity} x ${(item.price / 100).toFixed(2)} each)</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button 
                                        variant="outline" 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
                                    >
                                        -
                                    </Button>
                                    <span className="text-lg font-semibold text-gray-900">{item.quantity}</span>
                                    <Button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-10 h-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                                    >
                                        +
                                    </Button>
                                    <Button 
                                        variant="ghost" 
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex justify-end">
                        <p className="text-2xl font-bold text-indigo-600">
                            Total: ${(total / 100).toFixed(2)}
                        </p>
                    </div>
                    <form action={checkoutAction}>
                        <input type="hidden" name="items" value={JSON.stringify(items)} />
                    <Button 
                        className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
                    >
                        Proceed to Payment
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}