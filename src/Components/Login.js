import React, { useState } from "react";
import Credential from "../userCred.json";
import {useDispatch} from 'react-redux';
import { toast } from 'react-toastify';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if(Credential.username===email && Credential.password===password){
      toast.success(`Logged in as ${email}`);
        dispatch({type:"LOGIN",payload:email});
    }else{
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Page</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
