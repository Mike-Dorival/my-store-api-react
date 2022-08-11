import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchAllProducts() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

export function useAllProducts() {
  const { data, isLoading, isError } = useQuery(["allProducts"], fetchAllProducts);
  return { data, isLoading, isError };
}
