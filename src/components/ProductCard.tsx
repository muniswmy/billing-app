import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function ProductCard({ product }: any) {
  const dispatch = useDispatch();

  const price = Math.round(product.price * 80);

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition">
      <img src={product.image} className="h-40 w-full object-contain" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">₹{price}</p>

      <button
        className="bg-yellow-500 w-full mt-2 py-2 text-white rounded"
        onClick={() => dispatch(addItem({ ...product, price }))}
      >
        Add to Cart
      </button>
    </div>
  );
}