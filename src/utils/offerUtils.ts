export const calculateDiscount = (subtotal: number) => {
  let discount = 0;

  if (subtotal > 200) discount = subtotal * 0.15;
  else if (subtotal > 100) discount = subtotal * 0.1;

  return discount;
};