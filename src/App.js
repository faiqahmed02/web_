import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './assets/style.css'
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();

  }, [])
  
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
