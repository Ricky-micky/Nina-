import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import SignUp from './Pages/SignUP';
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard';
import CarRental from './Pages/CarRental';
import Login from './Pages/Loginform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import AirPortTaxis from './Pages/AirPortTaxis';
import Activities from './Pages/Activities';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <NavBar />
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/register" element={<Register />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/carRental" element={<CarRental/>}/>
          <Route path="/airPort" element={<AirPortTaxis/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>

           </Routes>
      </Router>
    </div>
  );
}

export default App;
