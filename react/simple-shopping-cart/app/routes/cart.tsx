import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import CartItem from "~/components/CartItem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shopping Cart" },
    { name: "description", content: "Shopping Cart" },
  ];
}

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      <Navbar />
      <article className="bg-gray-700 min-h-[calc(100vh-70px)] flex flex-col items-center">
        {cart.length === 0 ? (
          <h1 className="text-white text-center text-4xl pt-4">
            Cart is Empty
          </h1>
        ) : (
          <div className="flex flex-col w-full gap-2 p-4">
            {cart.map((item) => (
              <div className="p-1 text-white bg-gray-800">
                <CartItem key={item.product.id} cartItem={item} />
              </div>
            ))}
            <div className="purchase flex flex-col w-max justify-center mx-auto pt-5 gap-2">
              <h1 className="text-white">
                Total Price:
                {cart
                  .reduce(
                    (sum, item) => sum + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h1>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Buy
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
