import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { addToCart } from "~/store/slices/cartSlice";
import type { Product } from "~/types";

function ProductCard(product: Product) {
  const dispatch = useDispatch();

  function onAddToCartClick(product: Product) {
    dispatch(addToCart(product));
  }

  return (
    <section className="flex flex-col p-3 gap-2 w-max max-w-[200px] text-white">
      <div className="product-image">
        <img
          className="border border-gray-400 rounded-sm object-cover w-[200px] h-[250px]"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="product-content">
        <h1 className="pl-2 line-clamp-2 h-[48px]">{product.name}</h1>
        <span className="text-sm pl-2 block truncate">
          {product.description}
        </span>
        <span className="pl-2 block">{product.price}</span>
      </div>
      <button
        className="border-1 rounded-sm py-2 hover:bg-gray-800 hover:text-green-500"
        onClick={() => onAddToCartClick(product)}
      >
        Add to Cart
      </button>
    </section>
  );
}

export default ProductCard;
