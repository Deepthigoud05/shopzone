import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              className="cart-item"
              key={index}
            >
              <h3>{item.title}</h3>

              <p>${item.price}</p>
            </div>
          ))}

          <br />

          <h2>Total: ${total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;