import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Destinations from './Pages/Destinations';
import DestinationDetails from './Pages/destinationdetail';


import AdminLogin from './Pages/admin/Login';
import AdminRegister from './Pages/admin/Register';
import AdminDashboard from './Pages/admin/admindashboard';
// Wrapper to conditionally render the Navbar
function AppContent() {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/', '/register']; 

  // Check if the current route is in the hideNavbarOnRoutes array
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin/login" element={<AdminLogin />} />  {/* Fixed Route */}
        <Route path="/admin/register" element={<AdminRegister />} />  {/* Fixed Route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />  {/* Fixed Route */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
