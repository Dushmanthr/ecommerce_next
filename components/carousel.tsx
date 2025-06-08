"use client";

import Stripe from 'stripe';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered && products.length > 1) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % products.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [products.length, isHovered]);

  const nextSlide = () => setCurrent(prev => (prev + 1) % products.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + products.length) % products.length);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container with fixed aspect ratio */}
      <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-800">
        {products.map((product, index) => {
          const price = product.default_price as Stripe.Price;
          const priceAmount = price?.unit_amount ? (price.unit_amount / 100).toFixed(2) : null;
          
          return (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Image container with consistent sizing */}
              <div className="absolute inset-0 flex items-center justify-center">
                {product.images?.[0] ? (
                  <Image
                    alt={product.name}
                    src={product.images[0]}
                    fill
                    className="object-contain" // Changed from object-cover to object-contain
                    priority={index === current}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>
              
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Product info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  {product.name}
                </h3>
                {priceAmount && (
                  <p className="text-xl md:text-2xl font-semibold mb-3 drop-shadow-lg">
                    ${priceAmount}
                  </p>
                )}
                {product.description && (
                  <p className="text-sm md:text-base max-w-2xl line-clamp-2 drop-shadow-lg">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {/* Navigation controls (only show if multiple products) */}
        {products.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-6 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};