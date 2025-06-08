'use client';

import Stripe from 'stripe';
import { ProductCard } from './product-card';
import {useState} from "react"

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description ? product.description.toLowerCase() : false;

    return nameMatch || descriptionMatch;
  })


  return (
    <div className="space-y-8">
      {/* Search bar */}
      <div className="mx-auto max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
          className="w-full rounded-lg border px-4 py-2 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

     {/* Grid layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};