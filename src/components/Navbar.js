import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbarDiv">
                <div>
                    <Link to="/">
                        <h2>
                            Home
                        </h2>
                    </Link>
                    <Link to="/plans">
                        <h2>
                            Our plans
                        </h2>
                    </Link>
                    <Link to="/contact">
                        <h2>Contact us</h2>
                    </Link>
                    <Link to="/about">
                        <h2>About</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/signup">
                        <h2>Sign up!</h2>
                    </Link>
                    <Link to="/login">
                        <h2>Log in</h2>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;