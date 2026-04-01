import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function CartPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <BackButton />

      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      <Cart />

      <div className="mt-6 text-right">
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}