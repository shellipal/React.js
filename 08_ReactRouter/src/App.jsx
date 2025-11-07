import { Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <Routes>
      <Header />
      <Home />
      <About />
      <Footer />
    </Routes>
  );
}

export default App;
