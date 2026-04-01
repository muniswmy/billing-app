import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";
import { calculateItemTotal } from "../utils/discount";

export default function Cart() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  let subtotal = 0;
  let totalSavings = 0;

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">🧺 Basket</h2>

      {items.map((item: any) => {
        const { total, savings } = calculateItemTotal(item, items);

        subtotal += total;
        totalSavings += savings;

        return (
          <div key={item.id} className="mb-4 border-b pb-3">
            <div className="flex justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <span>₹{item.price}</span>
            </div>

           
            <div className="flex items-center mt-2">
              <button onClick={() => dispatch(decrease(item.id))}>-</button>
              <span className="mx-3">{item.quantity}</span>
              <button onClick={() => dispatch(increase(item.id))}>+</button>
            </div>

            <p className="text-sm mt-1">
             Item price: £ {item.price} × {item.quantity} = £ {(item.price * item.quantity).toFixed(2)}
            </p>

            
            {savings > 0 && (
              <p className="text-red-500 font-medium">
                Savings £ {savings.toFixed(2)}
              </p>
            )}

            <p className="font-semibold">
              Item cost £ {total.toFixed(2)}
            </p>
          </div>
        );
      })}

      <hr className="my-3" />

      <p>Sub Total: £ {subtotal.toFixed(2)}</p>
      <p className="text-green-600">Savings: £ {totalSavings.toFixed(2)}</p>

      <h2 className="text-lg font-bold mt-2">
        Total Amount: £ {subtotal.toFixed(2)}
      </h2>
    </div>
  );
}