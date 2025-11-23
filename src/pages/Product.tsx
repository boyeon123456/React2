import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Product() {
  return (
    <div className="container">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}
