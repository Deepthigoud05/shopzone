import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch products"
          );
        }

        return res.json();
      })
      .then((data) =>
        setProducts(data.products)
      )
      .catch((error) => {
        console.error(error);

        setError(
          "Unable to load products. Please try again later."
        );
      });
  }, []);

  return (
    <div className="container">
      <h1>Shop Products</h1>

      <br />

      {error && <h3>{error}</h3>}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;