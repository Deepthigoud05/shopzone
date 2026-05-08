import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.products)
      );
  }, []);

  return (
    <div className="container">
      <h1>Shop Products</h1>

      <br />

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