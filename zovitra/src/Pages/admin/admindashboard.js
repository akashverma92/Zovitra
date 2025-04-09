// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../../Components/Card";
// import { User, MapPin, CalendarCheck } from "lucide-react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   // State to store fetched data
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalDestinations: 0,
//     dailyBookings: 0,
//   });

//   const [adminEmail, setAdminEmail] = useState(""); // Admin email state

//   // Fetch dashboard stats
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/stats");
//         setStats(response.data);
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Fetch admin email
//   useEffect(() => {
//     const fetchAdminEmail = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/profile", {
//           withCredentials: true, // Ensure session cookies are sent
//         });
//         setAdminEmail(response.data.email);
//       } catch (error) {
//         console.error("Error fetching admin profile:", error);
//       }
//     };

//     fetchAdminEmail();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-white shadow-md p-4 flex justify-between items-center">
//         <div className="text-xl font-bold">Zovitra</div>
//         <div className="text-lg font-semibold">Admin Dashboard</div>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-600">{adminEmail || "Loading..."}</span>
//           <img
//             src="/profile-placeholder.png"
//             alt="Admin Profile"
//             className="w-10 h-10 rounded-full border"
//           />
//         </div>
//       </header>

//       {/* Dashboard Cards Section */}
//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Total Users */}
//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <User className="text-blue-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Total Users</p>
//             <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
//           </div>
//         </Card>

//         {/* Total Destinations */}
//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <MapPin className="text-green-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Total Destinations</p>
//             <h2 className="text-2xl font-bold">{stats.totalDestinations}</h2>
//           </div>
//         </Card>

//         {/* Daily Bookings */}
//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <CalendarCheck className="text-red-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Daily Bookings</p>
//             <h2 className="text-2xl font-bold">{stats.dailyBookings}</h2>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../../Components/Card";
// import { User, MapPin, CalendarCheck } from "lucide-react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalDestinations: 0,
//     dailyBookings: 0,
//   });
//   const [adminEmail, setAdminEmail] = useState("");

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/stats");
//         setStats(response.data);
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   useEffect(() => {
//     const fetchAdminEmail = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/profile", {
//           withCredentials: true,
//         });
//         setAdminEmail(response.data.email);
//       } catch (error) {
//         console.error("Error fetching admin profile:", error);
//       }
//     };
//     fetchAdminEmail();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="admin-header">
//         <div className="website-name">Zovitra</div>
//         <div className="profile-container">
//           <span className="text-gray-600 email-display">{adminEmail || "Loading..."}</span>
//           <img
//             src="/profile-placeholder.png"
//             alt="Admin Profile"
//             className="profile-img"
//           />
//         </div>
//       </header>

//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <User className="text-blue-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Total Users</p>
//             <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
//           </div>
//         </Card>

//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <MapPin className="text-green-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Total Destinations</p>
//             <h2 className="text-2xl font-bold">{stats.totalDestinations}</h2>
//           </div>
//         </Card>

//         <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
//           <CalendarCheck className="text-red-500 w-12 h-12 mr-4" />
//           <div>
//             <p className="text-gray-600 text-sm">Daily Bookings</p>
//             <h2 className="text-2xl font-bold">{stats.dailyBookings}</h2>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import { User, MapPin, CalendarCheck } from "lucide-react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom"; // For redirecting to login

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalDestinations: 0, dailyBookings: 0 });
  const [adminEmail, setAdminEmail] = useState(""); // Admin email state
  const navigate = useNavigate();

  // Fetch dashboard stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  // Fetch admin email
  useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/profile", {
          withCredentials: true,
        });
        setAdminEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };
    fetchAdminEmail();
  }, []);

  // Logout function
  const handleLogout = () => {
    axios.post("http://localhost:5000/api/admin/logout", {}, { withCredentials: true })
    .then(() => {
      window.location.href = "/admin/login"; // Redirect after logout
    })
    .catch(error => console.error("Logout failed:", error));
  
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="admin-header">
        <div className="website-name">Zovitra</div>
        <div className="text-lg font-semibold">Admin Dashboard</div>

        {/* Dropdown Menu */}
        <Menu as="div" className="profile-container">
          <Menu.Button className="profile-btn">
            <img src="/profile-placeholder.png" alt="Admin Profile" className="profile-img" />
            <ChevronDown className="icon" />
          </Menu.Button>

          <Menu.Items className="dropdown-menu">
            <Menu.Item>
              {({ active }) => (
                <div className={`dropdown-item ${active ? "bg-gray-200" : ""}`}>
                  {adminEmail || "Loading..."}
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`dropdown-item ${active ? "bg-gray-200" : ""}`}>
                  Edit Profile
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`dropdown-item logout ${active ? "bg-red-200" : ""}`} onClick={handleLogout}>
                  Logout
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </header>

      {/* Dashboard Cards Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users */}
        <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
          <User className="text-blue-500 w-12 h-12 mr-4" />
          <div>
            <p className="text-gray-600 text-sm">Total Users</p>
            <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
          </div>
        </Card>

        {/* Total Destinations */}
        <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
          <MapPin className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <p className="text-gray-600 text-sm">Total Destinations</p>
            <h2 className="text-2xl font-bold">{stats.totalDestinations}</h2>
          </div>
        </Card>

        {/* Daily Bookings */}
        <Card className="bg-white shadow-lg p-5 flex items-center hover:shadow-xl transition-shadow">
          <CalendarCheck className="text-red-500 w-12 h-12 mr-4" />
          <div>
            <p className="text-gray-600 text-sm">Daily Bookings</p>
            <h2 className="text-2xl font-bold">{stats.dailyBookings}</h2>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;



