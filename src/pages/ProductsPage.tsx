import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍 Products</h1>

      <Link to="/cart" className="bg-black text-white px-4 py-2">
        Go to Cart
      </Link>

      <ProductList />
    </div>
  );
}