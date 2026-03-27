import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
   const navigate = useNavigate(); 

  const handleCheckout = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        items,
        createdAt: serverTimestamp(),
      });

      dispatch(clearCart());
      alert("Order Saved Successfully!");
       navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error saving order");
    }
  };

  return (
    <button
      className="bg-green-600 text-white p-3 w-full rounded mt-4"
      onClick={handleCheckout}
    >
      Place Order
    </button>
  );
}