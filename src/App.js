import React from "react";
import Alluser from "./Alluser";
import "./alluser.css";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Alluser />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
