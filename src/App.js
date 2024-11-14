import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Discover from "./Components/Discover"

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/discover"  element={<Discover />} />
        <Route path="/movies"  />
        <Route path="/animation"  />
        <Route path="/favourites"/>
      </Routes>
    </Router>
  );
}

export default App;
