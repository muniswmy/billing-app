import Checkout from "../components/Checkout";
import BackButton from "../components/BackButton";

export default function CheckoutPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <BackButton />

      <h1 className="text-xl font-bold mb-4 text-center">
        💳 Checkout
      </h1>

      <Checkout />
    </div>
  );
}