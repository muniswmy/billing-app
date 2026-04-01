import products from "../data/products";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-1/2 border-r p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {products.map((p, index) => (
          <div
            key={p.id}
            className={`flex items-center justify-between px-4 py-3 
            ${index !== products.length - 1 ? "border-b" : ""}`}
          >
            {/* Product Name */}
            <div className="w-1/3 font-medium">
              {p.title}
            </div>

            
            <div className="w-1/3 text-center text-gray-700 font-semibold">
              £{p.price}
            </div>

            
            <div className="w-1/3 text-right">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => {
                  dispatch(addItem(p));
                  navigate("/cart");
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}