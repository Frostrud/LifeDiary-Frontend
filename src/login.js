import React from "react";
import Middiv from "./Middiv";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/collections');
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