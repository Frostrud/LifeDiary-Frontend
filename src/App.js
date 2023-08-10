import React from 'react';
import './index.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import StoragePlans from './StoragePlans';
import SignUp from './SignUp';
import Contact from './contact';
import About from './about';
import Login from './login';
import CollectionsPage from './collectionsPage';
import Collection from './Collection';
import Text from './pages/Text';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} >
          </Route>
          <Route path = "/plans" element = {<StoragePlans></StoragePlans>} ></Route>
          <Route path = "/signup" element = {<SignUp></SignUp>} ></Route>
          <Route path = "/contact" element = {<Contact></Contact>} ></Route>
          <Route path = "/about" element = {<About></About>} ></Route>
          <Route path = "/login" element = {<Login></Login>} ></Route>
          <Route path = "/collections/:userId" element = {<CollectionsPage></CollectionsPage>}></Route>
          <Route path = "/collection/:collectionId" element = {<Collection></Collection>}></Route>
          <Route path = "/texts/:textId" element = {<Text></Text>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;