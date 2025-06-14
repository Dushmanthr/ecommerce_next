import { stripe } from "@/lib/stripe";
import { ProductDetails } from "@/components/product-detail";

// Define props type for the dynamic route
type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Define type for the Stripe product


export default async function ProductPage({ params }: Props) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  return <ProductDetails product={product} />;
}



