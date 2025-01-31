import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)

import React from "react";
import './App.css'
// import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Signup from "./Components/Auth/Signup";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Login from './Components/Auth/Login';

function App() {
  return (
   <Router>  
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       
      </div>
   </Router>
  );
}




export default App;