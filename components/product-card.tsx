import Stripe from 'stripe';

interface Props{
    products: Stripe.Product[]
}


export const ProductList = ({products} : Props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder='Search Products...'/>
            </div>

            <ul>
                {products.map((product) => {
                    return (
                        <li></li>
                    )
                })}
            </ul>
        </div>
    )
}