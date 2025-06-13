'use client';

import Link from 'next/link'
import {ShoppingCartIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {useCartStore} from '@/store/cart-store';
import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const {items} = useCartStore();
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors">
                My Ecommerce
            </Link>

            <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-white hover:text-indigo-200 font-medium transition-colors">
                    Home
                </Link>
                <Link href="/products" className="text-white hover:text-indigo-200 font-medium transition-colors">
                    Products
                </Link>
                <Link href="/checkouts" className="text-white hover:text-indigo-200 font-medium transition-colors">
                    Checkouts
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link href="/checkouts" className="relative text-white">
                    <ShoppingCartIcon className="h-7 w-7 hover:text-indigo-200 transition-colors" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-semibold">
                            {cartCount}
                        </span>
                    )}
                </Link>
                <Button 
                    variant="ghost" 
                    className="md:hidden text-white hover:text-indigo-200" 
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    {mobileOpen ? (
                        <XMarkIcon className="h-7 w-7" />
                    ) : (
                        <Bars3Icon className="h-7 w-7" />
                    )}
                </Button>
            </div>
        </div>

        {mobileOpen && (
            <nav className="md:hidden bg-indigo-700 shadow-md">
                <ul className="flex flex-col p-6 space-y-4">
                    <li>
                        <Link 
                            href="/" 
                            className="block text-white text-lg font-medium hover:text-indigo-200 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/products" 
                            className="block text-white text-lg font-medium hover:text-indigo-200 transition-colors"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/checkouts" 
                            className="block text-white text-lg font-medium hover:text-indigo-200 transition-colors"
                        >
                            Checkouts
                        </Link>
                    </li>
                </ul>
            </nav>
        )}
    </nav>
)
}