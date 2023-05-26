import React from "react";
import Middiv from "./Middiv";
import { useNavigate } from 'react-router-dom';
import useLogin from "./hooks/useLogin";

const Login = () => {
  const {loading, error, login} = useLogin();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    navigate('/collections');

    await login(email, password)
  };


  return (
    <Middiv>
      <div className="loginDiv">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required></input><br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required></input><br></br>
        <input type="submit" value="Login"></input><br></br>
      </form>
    </div>
    </Middiv>
    
  );
}

export default Login;