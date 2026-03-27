import { useSelector } from "react-redux";

export default function Bill() {
  const { items } = useSelector((state: any) => state.cart);

  const subtotal = items.reduce(
    (sum: number, i: any) => sum + i.price * i.quantity,
    0
  );

  const discount = subtotal > 500 ? 50 : 0;
  const total = subtotal - discount;

  return (
    <div>
      <p>Subtotal: ₹{subtotal}</p>
      <p>Discount: ₹{discount}</p>
      <p className="font-bold">Total: ₹{total}</p>
    </div>
  );
}