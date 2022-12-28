import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./assets/style.css";
import AOS from "aos";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Logo from "./components/services/logo/Logo";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/logo" element={<Logo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
