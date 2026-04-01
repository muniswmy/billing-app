import { useEffect, useState } from "react";
import productsData from "../data/products";

export default function useProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return products;
}