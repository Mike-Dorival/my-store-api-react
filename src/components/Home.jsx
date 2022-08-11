import { useAllProducts } from "./utils/fetchAllProducts";

function Home() {
  const { data, isLoading, isError } = useAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
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
    </>
  );
}

export default Home;
