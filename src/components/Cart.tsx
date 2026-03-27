import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";

export default function Cart() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item: any) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain rounded"
          />

          {/* Details */}
          <div className="flex-1">
            <h2 className="font-semibold text-gray-800 line-clamp-1">
              {item.title}
            </h2>

            <p className="text-green-600 font-bold mt-1">
              ₹{item.price}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => dispatch(decrease(item.id))}
              >
                -
              </button>

              <span className="mx-3 font-medium">
                {item.quantity}
              </span>

              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => dispatch(increase(item.id))}
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="font-bold text-lg text-gray-700">
            ₹{item.price * item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
}