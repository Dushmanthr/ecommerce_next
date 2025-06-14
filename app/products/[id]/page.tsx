import { stripe } from "@/lib/stripe";
import { ProductDetails } from "@/components/product-detail";

type Props = {
    params: {id: string};
    searchParams?: {[key: string]: string | string[] | undefined};
};

export default async function ProductPage({params}: Props) {

    const product = await stripe.products.retrieve(params.id, {
        expand: ['default_price']
    })
    const plainProduct = JSON.parse(JSON.stringify(product));
return <ProductDetails product={plainProduct}/>;
}