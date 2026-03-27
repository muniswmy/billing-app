import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}