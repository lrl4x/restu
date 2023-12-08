import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Downloadsection from './component/Downloadsection'
import Fotter from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import SecondHero from './component/SecondSection'
import ThirdSection from './component/ThirdSection'
import Home from "./pages/Home";
import LoginAndRegister from "./pages/LoginAndRegister";
import Order from "./pages/Order";
import React from "react";
import Menup from "./pages/Menup";
import Detailsp from './/pages/Detailsp'
import Login from "./pages/Loginp";
import Signupp from "./pages/Signupp";
import Selectp from "./pages/Selectp";
import Customizep from "./pages/Customizep";
import { Cartp } from "./pages/Cartp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Cart" element={<Cartp />} />
        <Route path="/Menu" element={<Menup />} />
        <Route path="/Menu/:category" element={<Menup />} />
        <Route path="/customize/:id" element={<Customizep />} />
        <Route path="/KIDSMEAL/:id" element={<Menup />} />
        <Route path='/details/:id' element={<Detailsp />} />
        <Route path="/Select/:userId/AddToCart/:itemId" element={<Selectp />} />
        <Route path="/Login" element={<LoginAndRegister />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<Signupp />} />
      </Routes>
    </Router>
  );
}

export default App