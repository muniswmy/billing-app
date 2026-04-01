export default function OffersCard() {
  const offers = [
    { title: "Cheese Offer", desc: "Buy 1 Get 1 Free 🧀" },
    { title: "Soup Combo", desc: "Buy Soup → Bread 50% off 🍞" },
    { title: "Butter Deal", desc: "Get 1/3 off 🧈" },
    { title: "Milk Offer", desc: "Buy 3 → ₹20 off 🥛" },
    { title: "Apple Offer", desc: "Buy 5 → 10% off 🍎" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="bg-yellow-100 p-3 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-sm">{offer.title}</h3>
          <p className="text-xs text-gray-700 mt-1">{offer.desc}</p>
        </div>
      ))}
    </div>
  );
}