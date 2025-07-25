import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <main className="flex flex-wrap justify-between">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </main>
  );
}

export default ProductList;
