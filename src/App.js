import "./App.css";
import { Routes, Route } from "react-router-dom"

import HomePage from "./Components/HomePage.js";
import AboutPage from "./Components/AboutPage";
import BlogPage from "./Components/BlogPage.js";
import TravelPage from "./Components/TravelPage.js";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Travel" element={<TravelPage />} />
      </Routes>
    
     
      
    </div>
  );
}

export default App;
