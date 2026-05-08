import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Login() {
  const { login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();

    navigate("/checkout");
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <br />

      <button onClick={handleLogin}>
        Login as Guest
      </button>
    </div>
  );
}

export default Login;