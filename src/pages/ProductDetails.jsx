import {
  useEffect,
  useState,
  useContext,
} from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const { addToCart } =
    useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <br />
      <br />

      <h1>{product.title}</h1>

      <br />

      <p>{product.description}</p>

      <br />

      <h2>${product.price}</h2>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;