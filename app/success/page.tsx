'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";

export default function SuccessPage(){
    const {clearCart} = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);
     return (
        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
            <div className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-lg transform transition-all duration-700 ease-out animate-slideIn">
                <div className="flex justify-center mb-6">
                    <svg 
                        className="w-16 h-16 text-indigo-500 animate-pulse"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7" 
                        />
                    </svg>
                </div>
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 tracking-tight">Payment Successful!</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">Thank you for your purchase. Your order is being processed.</p>
                <Link 
                    href="/products" 
                    className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg font-semibold transform hover:scale-105"
                >
                    Continue Shopping
                </Link>
            </div>
            <style jsx>{`
                @keyframes slideIn {
                    0% {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.7s ease-out forwards;
                }
            `}</style>
        </div>
    )
}