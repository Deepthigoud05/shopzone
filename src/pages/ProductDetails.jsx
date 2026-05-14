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

  const [error, setError] = useState("");

  const { addToCart } =
    useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch product details"
          );
        }

        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error(error);

        setError(
          "Unable to load product details."
        );
      });
  }, [id]);

  if (error) {
    return (
      <h1 className="container">
        {error}
      </h1>
    );
  }

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