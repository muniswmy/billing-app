import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 👈 important

  const handleCheckout = async () => {
    try {
      await addDoc(collection(db, "orders"), { items });

      dispatch(clearCart());

      alert("✅ Order placed successfully!");

      navigate("/"); // 🔥 redirect to home
    } catch (error) {
      console.error(error);
      alert("❌ Error placing order");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-600 p-3 text-white w-full rounded"
    >
      Place Order
    </button>
  );
}