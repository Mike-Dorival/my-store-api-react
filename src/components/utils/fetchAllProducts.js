import axios from "axios";

export async function fetchAllProducts() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}
