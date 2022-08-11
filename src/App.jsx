import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
