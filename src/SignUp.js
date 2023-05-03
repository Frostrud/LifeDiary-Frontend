import NavBar from "./Navbar";

const SignUp = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="plansDiv">
                <div className="planDiv">
                    <div>
                        <h1>
                            Basic Plan
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Space up to 50GB
                        </h2>
                        <h2>
                            Monthly payment
                        </h2>
                        <h2>
                            Can only store images or videos
                        </h2>
                        <h2>
                            Only 5.99$ per month!
                        </h2>
                        <button>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;