import React from "react";
import { Routes, Route } from "react-router-dom";
// import HeroSection from '../src/components/HeroSection'
// import Articles from './components/Articles';
// import BlogPost from './components/BlogPost';
// import Subscribe from './components/Subscribe';
import { Home } from "../src/pages/Home";
import { BlogBody } from "./pages/BlogBody";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogBody />} />
    </Routes>
  );
}

export default App;
