import { useState } from 'react';
import Middiv from "./components/Middiv";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import useEndpoint from './hooks/useEndpoint';
import { useNavigate } from 'react-router-dom';


//TODO Fix error display
const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [dropdownOption, setDropdownOption] = useState("Basic");
    const { loading, error, fetchData, status } = useEndpoint();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleDropdownChange = (event) => {
        setDropdownOption(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const membership = event.target.dropdown.value;

        const userData = {
            firstName,
            lastName,
            email,
            password,
            membership,
        };

        //Request
        try {
            await fetchData("/api/signup", 'POST', userData);
            
            if(status === 200) {
                {
                    const response = await fetch("http://localhost:8080/api/getID/" + email, {
                      method: "GET",
                      headers: {
                          'Content-Type': 'application/json',
                        }
                  })
            
                      const userID = await response.json();
                      navigate('/collections/' + userID, { state: { id: userID } });
            
              }
            }

        } catch (error) {

        }

    };


    return (
        <Middiv>
            <div className="signUpDiv">
                <h2>Sign up!</h2>
                <form onSubmit={handleSubmit}>

                    <label for="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" required></input><br></br>
                    <label for="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" required></input><br></br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required></input><br></br>
                    <label for="password">Password:</label>
                    <input type={passwordVisible ? "text" : "password"} id="password" name="password" required></input><br></br>
                    <button type="button" onClick={togglePasswordVisibility} style={{ backgroundColor: 'transparent', border: 'none' }}>
                        {passwordVisible ? <FiEyeOff /> : <FiEye />}
                    </button>

                    <br />
                    <select className="dropdownPlan" name="dropdown" value={dropdownOption} onChange={handleDropdownChange}>
                        <option value="Basic">Basic</option>
                        <option value="Premium">Premium</option>
                        <option value="Premium+">Premium+</option>
                    </select>
                    <br />
                    <h3 id="errorMessage" style={{ visibility: loading || error ? "visible" : "hidden", color: "#d0342c" }}>
                        {loading ? 'Loading...' : error ? 'Error: ' + error.message : ''}
                    </h3>
                    <input type="submit" value="Sign Up"></input><br></br>
                    {loading && (
                        <div className="spinner-overlay">
                            <div className="spinner" />
                        </div>
                    )}
                </form>
            </div>
        </Middiv>
    );
}

export default SignUp;