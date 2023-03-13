import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbarDiv">
                <div>
                    <Link to="/plans">
                        <h2>
                            Our plans
                        </h2>
                    </Link>
                    <h2>Contact us</h2>
                    <h2>About</h2>
                </div>
                <div>
                    <h2>Sign up!</h2>
                    <h2>Log in</h2>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;