import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "./components/utils/fetchAllProducts";
import "./App.css";

function App() {
  const { data, error, isError, isLoading } = useQuery(["allProducts"], fetchAllProducts);
  // first argument is a string to cache and track the query result
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="container">
      <h1>Items</h1>
      {data.map(({ title, category, description, price, image, id }) => {
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{description}</p>
            <img src={image} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
