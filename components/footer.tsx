
'use client';

import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const Footer =() => {
    return (
        <footer className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">ShopDon</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Your one-stop shop for quality products and seamless shopping experiences.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/checkouts" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-5 w-5 text-green-400" />
                            <a href="mailto:support@shopdon.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                support@shopdon.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <PhoneIcon className="h-5 w-5 text-green-400" />
                            <a href="tel:+1234567890" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                +94 (720) 421-867
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media & Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 4.01c-.81.36-1.68.6-2.59.71a4.51 4.51 0 001.98-2.49 9.03 9.03 0 01-2.86 1.09A4.5 4.5 0 0015.5 2c-2.49 0-4.5 2.01-4.5 4.5 0 .35.04.69.11 1.02A12.77 12.77 0 013 3.74a4.5 4.5 0 001.39 6.01 4.48 4.48 0 01-2.04-.56v.06c0 2.18 1.55 4 3.61 4.41a4.5 4.5 0 01-2.03.08c.57 1.78 2.23 3.08 4.19 3.12A9.02 9.02 0 012 19.54a12.74 12.74 0 006.91 2.03c8.29 0 12.82-6.86 12.82-12.82 0-.2 0-.39-.01-.59A9.15 9.15 0 0022 4.01z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.512.068-2.898.377-3.986 1.465C2.014 2.59 1.705 3.976 1.637 5.488c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.068 1.512.377 2.898 1.465 3.986 1.053 1.053 2.439 1.362 3.951 1.43 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.512-.068 2.898-.377 3.986-1.465 1.053-1.053 1.362-2.439 1.43-3.951.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.068-1.512-.377-2.898-1.465-3.986C21.41.377 20.024.068 18.512 0 17.232-.058 16.824-.072 12-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-gray-300 text-sm">Follow us for exclusive offers!</p>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} ShopDon. All rights reserved.
                </p>
            </div>
        </footer>
    )
}