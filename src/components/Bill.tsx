import { useSelector } from "react-redux";
import { calculateItemTotal } from "../utils/discount";

export default function Bill() {
  const { items } = useSelector((state: any) => state.cart);

  let subtotal = 0;
  let totalSavings = 0;

  items.forEach((item: any) => {
    const { total, savings } = calculateItemTotal(item, items);

    subtotal += total;
    totalSavings += savings;
  });

  return (
    <div>
      <p>Sub Total: ₹{subtotal.toFixed(2)}</p>

      <p className="text-green-600">
        Savings: ₹{totalSavings.toFixed(2)}
      </p>

      <h2 className="font-bold text-lg">
        Total Amount: ₹{subtotal.toFixed(2)}
      </h2>
    </div>
  );
}