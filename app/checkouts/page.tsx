'use client'

import { CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";



export default function CheckoutsPage() {
    const { items } = useCartStore();
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if(total === 0 || items.length === 0) {
        return(
            <div>
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

    return (
        <div>
            <h1> Checkout</h1>
            <Card>
                <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
                <CardContent>
                    <ul>
                        {items.map((item, key) => (
                            <li key= {key}>
                                <div>
                                    <span>{item.name}</span>
                                    <span>{(item.price * item.quantity) /100}.toFixed(2)</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
           
        </div>
    )
}