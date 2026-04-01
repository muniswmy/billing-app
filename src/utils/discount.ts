export const calculateItemTotal = (item: any, cart: any[]) => {
  const total = item.price * item.quantity;
  let savings = 0;

  const itemTitle = item.title.trim().toLowerCase();
  const soupItem = cart.find(i => i.title.trim().toLowerCase() === "soup");

  if (itemTitle === "cheese") {
    const freeQty = Math.floor(item.quantity / 2);
    savings = freeQty * item.price;
  }

  if (itemTitle === "bread") {
    if (soupItem && soupItem.quantity > 0) {
      const eligibleQty = Math.min(item.quantity, soupItem.quantity);
      savings = eligibleQty * item.price * 0.5;
    }
  }

  if (itemTitle === "butter") {
    savings = item.quantity * item.price * (1 / 3);
  }

  if (itemTitle === "milk" && item.quantity >= 3) {
    savings = 20;
  }

  if (itemTitle === "apple" && item.quantity >= 5) {
    savings = total * 0.1;
  }

  return {
    total: Number((total - savings).toFixed(2)),
    savings: Number(savings.toFixed(2)),
  };
};