import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "~/store/slices/cartSlice";
import type { CartItemType } from "~/types";

type CartItemProps = {
  cartItem: CartItemType;
};

function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useDispatch();

  function onAmountClick(clickType: string) {
    switch (clickType) {
      case "+":
        dispatch(addToCart(cartItem.product));
        break;
      case "-":
        dispatch(removeFromCart(cartItem.product.id));
        break;
    }
  }

  return (
    <section className="flex gap-2 px-6 py-4 border border-gray-600">
      <div className="product_img">
        <img className="h-[100px] w-[100px]" src={cartItem.product.imageUrl} />
      </div>
      <div className="product_details w-full flex flex-col justify-between h-[100px]">
        <div className="product_properties flex flex-col">
          <h1>{cartItem.product.name}</h1>
          <span className="block">{cartItem.product.description}</span>
        </div>
        <div className="product_price flex justify-between">
          <div className="flex gap-2">
            <span className="">{cartItem.quantity}</span>
            <button
              onClick={() => onAmountClick("+")}
              className="px-1.5 border border-blue-700 hover:border-blue-400"
            >
              +
            </button>
            <button
              onClick={() => onAmountClick("-")}
              className="px-1.5 border border-blue-700 hover:border-blue-400"
            >
              -
            </button>
          </div>
          <span className="block">{cartItem.product.price}</span>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
