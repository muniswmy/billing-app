import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
      <img src={product.image} className="h-32 w-full object-cover rounded" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">₹{product.price}</p>

      <button
        className="bg-yellow-500 w-full mt-2 py-2 text-white rounded"
        onClick={() => {
          dispatch(addItem(product));
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}