import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";

export default function Cart() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item: any) => (
        <div key={item.id} className="flex justify-between mt-2">
          <span>{item.title}</span>
          <div>
            <button onClick={() => dispatch(decrease(item.id))}>-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => dispatch(increase(item.id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}