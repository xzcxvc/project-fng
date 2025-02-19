import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ScrollParallax } from "react-just-parallax";
import accent1 from "./assets/png/accent1.png";

function App() {
  const [count, setCount] = useState(0);

  const parallaxRef = useRef();

  return (
    <div className="overflow-hidden" ref={parallaxRef}>
     

      <Hero />
      <Header />
    </div>
  );
}

export default App;
