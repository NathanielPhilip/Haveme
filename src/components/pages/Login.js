import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };

  const googleClick = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      navigate("/home", { replace: true });
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form action="">
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={handleClick}>Sign in</button>
        <button onClick={googleClick}>Sign in with google</button>
      </form>
    </>
  );
}

export default Login;
