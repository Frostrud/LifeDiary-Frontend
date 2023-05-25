import React from "react";
import NavBar from "./Navbar";

const Middiv = ({children}) => {
    return (
        <div>
            <NavBar />
            <main className = "content">
                {children}
                <div className="footerDiv">
                    <footer>© 2023 LifeDiary </footer>
                </div>
                
            </main>
        </div>
    );
};

export default Middiv;
 
