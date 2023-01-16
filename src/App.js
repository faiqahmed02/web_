import logo from "./logo.svg";
import "./App.css";
import "./assets/style.css";
import AOS from "aos";
import { useEffect } from "react";
import Allroute from "./Allroute";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Allroute />
        <Footer />
      </Router>
    </>
  );
}

export default App;
