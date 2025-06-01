import Image from "next/image";
import Styles from "./page.module.css";
import {stripe} from "@/lib/stripe";

export default async function Home() {

  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })
  console.log(products);
  return (
    <div>
      <section>
        <div>
          <div>
              <h1>Welcome to ShopDon</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
