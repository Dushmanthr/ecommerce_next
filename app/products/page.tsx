import { stripe } from '@/lib/stripe';
import { ProductList } from '@/components/product-list';

export default async function ProductPage() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="mb-8 text-3xl font-bold items-center">All Products</h1>
      <ProductList products={products.data} />
    </div>
  );
}