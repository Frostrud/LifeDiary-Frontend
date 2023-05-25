import Middiv from "./Middiv";

const SignUp = () => {
    return (
        <Middiv>
            <div className="plansDiv">
                <div className="planDiv">
                    <div>
                        <h1>
                            Sign up for a limited offer of 5% off!
                        </h1>
                    </div>
                    <div className="SignUpDiv">
                        <form>
                            <label for="fname">First Name:</label><br></br>
                            <input type="text" id = "fname"></input><br></br>
                            <label for="lname">Last Name:</label><br></br>
                            <input type="text" id = "lname"></input><br></br>
                            <select id="plans" name="plans">
                                <option value="basic">Basic</option>
                                <option value="premium">Premium</option>
                                <option value="premium+">Premium +</option>
                            </select>
                        </form>
                        <button>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </Middiv>
    );
}

export default SignUp;