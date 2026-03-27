import Bill from "../components/Bill";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function BillPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        
        <BackButton />

        <h1 className="text-2xl font-bold mb-4 text-center">
          🧾 Order Summary
        </h1>

        <Bill />

        <Link
          to="/checkout"
          className="block mt-6 w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
        >
          Proceed to Payment →
        </Link>
      </div>
    </div>
  );
}