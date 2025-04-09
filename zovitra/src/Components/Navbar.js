// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>Zovitra</h2>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/destinations">Destinations</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <div className="user-profile">
//         <i className="profile-icon">👤</i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Hide navbar on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null; // Don't render navbar on admin pages
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Zovitra</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="user-profile">
        <i className="profile-icon">👤</i>
      </div>
    </nav>
  );
};

export default Navbar;
