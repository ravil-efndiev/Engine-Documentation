import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import Header from "../components/Header";
import Title from "../components/Title";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/upload");
    }
    catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Title title="Login" />
      <Header />
      <h6 className="text-center text-xl mt-5">Please log in as administrator to continue</h6>
      <form onSubmit={handleLogin} className="admin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default Login;
