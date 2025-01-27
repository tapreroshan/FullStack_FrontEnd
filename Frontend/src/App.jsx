import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)

import React from "react";
import './App.css'
// import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";

function App() {
  return (
   <Router>  
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       
      </div>
   </Router>
  );
}




export default App;