import React from "react";
import NavBar from "./Navbar";

const Middiv = ({children}) => {
    return (
        <div>
            <main className = "content">
                <NavBar />
                {children}
                <footer>© 2023 LifeDiary </footer>
            </main>
        </div>
    );
};

export default Middiv;
 
