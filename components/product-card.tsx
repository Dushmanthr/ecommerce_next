import Link from 'next/link';
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import Stripe from 'stripe';

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  const priceAmount = price?.unit_amount ? (price.unit_amount / 100).toFixed(2) : null;

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/50">
      <Link href= {`/products/${product.id}`} className= "group block h-full" >
        {/* Image Container with hover effect */}
        <div className="relative aspect-square w-full overflow-hidden">
          {product.images?.[0] ? (
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
              <ShoppingCart className="h-4 w-4" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="line-clamp-2 text-lg font-medium">
              {product.name}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            {priceAmount && (
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  ${priceAmount}
                </span>
                {product.metadata?.originalPrice && (
                  <span className="text-sm text-gray-500 line-through dark:text-gray-400">
                    ${(parseFloat(product.metadata.originalPrice)).toFixed(2)}
                  </span>
                )}
              </div>
            )}
          </CardContent>

          {/* Optional description */}
          {product.description && (
            <CardFooter className="p-0 pt-2">
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </CardFooter>
          )}
        </div>
      </Link>
    </Card>
  );
};