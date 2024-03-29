import React, { useEffect, useState } from "react";
import Middiv from "./components/Middiv";
import { useNavigate } from 'react-router-dom';
import useEndpoint from "./hooks/useEndpoint";

const Login = () => {
  const { loading, error, status, fetchData } = useEndpoint();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const userData = {
      email,
      password,
    };

    //TODO Needs to click twice for some reason. Try-catch needed?
    //Request
    try {
      await fetchData("/api/login", 'POST', userData);

      if(status === 200) {
        const response = await fetch("http://localhost:8080/api/getID/" + email, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
            }
      })

          const data = await response.json();
          setUserID(data)

  }
      else if(status === 403) {
      var x = document.getElementById("errorMessage");
      x.style.visibility = "visible"
      };

    } catch (error) {
      if(status === 403) {
        var x = document.getElementById("errorMessage");
        x.style.visibility = "visible"
      }
    }
      
  };

  useEffect(() => {
    if (userID !== null) {
      navigate('/collections/' + userID, { state: { id: userID } });
    }
  }, [userID]);


  return (
    <Middiv>
      <div className="loginDiv">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" required></input><br></br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required></input><br></br>
          <h3 id="errorMessage" style={{ visibility: "hidden", color: "#d0342c" }}>Wrong username or password</h3>
          <input type="submit" value="Login"></input><br></br>
        </form>
      </div>
    </Middiv>

  );
}

export default Login;