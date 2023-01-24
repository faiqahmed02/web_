import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Logo from "./components/services/logo/Logo";
import Website from "./components/services/website/Website";
import EcommerceWebsite from "./components/services/website/EcommerceWebsite";
import Home from "./components/home/Home";
import Contact from "./components/ContactUs/Contact";
import Portfolio from "./components/services/branding/Portfolio";


function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/logo" element={<Logo />} />
      <Route path="/services/website" element={<Website />} />
      <Route path="/services/ecommercewesbite" element={<EcommerceWebsite />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default Allroute;
