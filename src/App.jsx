import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Politics from "./pages/Politics";
import FilmsEntertainment from "./pages/FilmsEntertainment";
import Crypto from "./pages/Crypto";
import Sports from "./pages/Sports";

function App() {
  return (
    <Router>
      <div className="flex justify-between p-5 mb-3 items-center font-mono">
        <div className="text-xl md:text-2xl underline cursor-pointer">
          TheNewsApp
        </div>
        <div className="space-x-6">
          <Link to="/" className=" underline">
            Home
          </Link>
          <Link to="/about" className="underline">
            About
          </Link>
        </div>
      </div>
      <div className="p-5 font-mono mb-3 space-x-6 underline text-red-400 overflow-x-auto items-center grid grid-flow-col place-items-center">
        <Link to="/Sports" className="">
          Sports
        </Link>
        <Link to="/Business" className="">
          Business
        </Link>
        <Link to="/Politics" className="">
          Politics
        </Link>
        <Link to="/Films" className="">
          Films
        </Link>
        <Link to="/Crypto" className="">
          Crypto
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Films" element={<FilmsEntertainment />} />
        <Route path="/Crypto" element={<Crypto />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

export default App;
