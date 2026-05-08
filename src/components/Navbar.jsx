import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } =
    useContext(CartContext);

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/shop">Shop</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/cart">
        Cart ({cartItems.length})
      </Link>

      <Link to="/checkout">
        Checkout
      </Link>
    </nav>
  );
}

export default Navbar;