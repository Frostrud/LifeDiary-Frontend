import React from 'react';
import './index.css';
import NavBar from './Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import StoragePlans from './StoragePlans';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} >
          </Route>
          <Route path = "/plans" element = {<StoragePlans></StoragePlans>} ></Route>
          <Route path = "/signup" element = {<SignUp></SignUp>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;