import React from "react";
import Middiv from "./Middiv";

const Login = () => {
  return (
    <Middiv>
      <div className="loginDiv">
      <h2>Login</h2>
      <form>
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