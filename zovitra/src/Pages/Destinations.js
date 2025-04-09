// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Destination.css'; 
// // We'll add styles here later


// const topDestinations = [
//   { id: 1, name: 'Goa', state: 'Goa', image: 'https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg', category: 'Beach' },
//   { id: 2, name: 'Manali', state: 'Himachal Pradesh', image: 'https://wallpaperbat.com/img/8669382-manali-story.jpg', category: 'Mountain' },
//   { id: 3, name: 'Jaipur', state: 'Rajasthan', image: 'https://becurious.co.in/wp-content/uploads/2019/10/Amer-Fort-Jaipur.png', category: 'Historical' },
//   { id: 4, name: 'Kaziranga', state: 'Assam', image: 'https://th.bing.com/th/id/R.cfa26230516c52f66cd9a5b5666234c7?rik=vCwIOpX%2boVxpcA&riu=http%3a%2f%2ftourmyodisha.com%2fwp-content%2fuploads%2f2022%2f12%2fKaziranga-National-Park-1.jpg&ehk=jqiExjzPoDKthBMUyoDKs6jzd2m4xrbEQd%2bOEsvfxjc%3d&risl=&pid=ImgRaw&r=0', category: 'Wildlife' },
//   { id: 5, name: 'Varanasi', state: 'Uttar Pradesh', image: 'https://wallpaperaccess.com/full/2714734.jpg', category: 'Religious' },
// ];

// const Destinations = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [fetchedDestinations, setFetchedDestinations] = useState([]);

//   // Function to fetch destinations from MySQL
//   const fetchDestinations = async (state) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations?state=${state}`);
//       setFetchedDestinations(response.data); // Set fetched destinations
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//       setFetchedDestinations([]); // Clear results on error
//     }
//   };

//   // Fetch data when search term changes
//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setFetchedDestinations([]); // Show top destinations if no search
//     } else {
//       fetchDestinations(searchTerm);
//     }
//   }, [searchTerm]);

//   return (
//     <div className="destinations-page">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Explore India</h1>
//         <p>Discover the best destinations across the country</p>
//       </div>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by state..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Destinations Grid */}
//       <div className="destinations-container">
//         <h2>{searchTerm ? `Results for "${searchTerm}"` : 'Top Destinations'}</h2>
//         <div className="grid">
//           {(searchTerm && fetchedDestinations.length > 0 ? fetchedDestinations : topDestinations).map(dest => (
//             <div key={dest.id} className="destination-card">
//               <img
//               src={dest.image ? dest.image : dest.image_url ? dest.image_url : 'https://via.placeholder.com/300'}
//               alt={dest.name}
//               onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} // Fallback if image fails
//               />
//               <h3>{dest.name}</h3>
//               <p>State: {dest.state}</p>
//               <p>Category: {dest.category}</p>
//               <button className="view-details">View Details</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Destinations;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './Destination.css';

const topDestinations = [
  { id: 1, name: 'Goa', state: 'Goa', image: 'https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg', category: 'Beach' },
  { id: 2, name: 'Manali', state: 'Himachal Pradesh', image: 'https://wallpaperbat.com/img/8669382-manali-story.jpg', category: 'Mountain' },
  { id: 3, name: 'Jaipur', state: 'Rajasthan', image: 'https://becurious.co.in/wp-content/uploads/2019/10/Amer-Fort-Jaipur.png', category: 'Historical' },
  { id: 4, name: 'Kaziranga', state: 'Assam', image: 'https://th.bing.com/th/id/R.cfa26230516c52f66cd9a5b5666234c7?rik=vCwIOpX%2boVxpcA&riu=http%3a%2f%2ftourmyodisha.com%2fwp-content%2fuploads%2f2022%2f12%2fKaziranga-National-Park-1.jpg&ehk=jqiExjzPoDKthBMUyoDKs6jzd2m4xrbEQd%2bOEsvfxjc%3d&risl=&pid=ImgRaw&r=0', category: 'Wildlife' },
  { id: 5, name: 'Varanasi', state: 'Uttar Pradesh', image: 'https://wallpaperaccess.com/full/2714734.jpg', category: 'Religious' },
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedDestinations, setFetchedDestinations] = useState([]);

  // Function to fetch destinations from MySQL
  const fetchDestinations = async (state) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/destinations?state=${state}`);
      setFetchedDestinations(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setFetchedDestinations([]);
    }
  };

  // Fetch data when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFetchedDestinations([]);
    } else {
      fetchDestinations(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="destinations-page">
      <div className="hero-section">
        <h1>Explore India</h1>
        <p>Discover the best destinations across the country</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="destinations-container">
        <h2>{searchTerm ? `Results for "${searchTerm}"` : 'Top Destinations'}</h2>
        <div className="grid">
          {(searchTerm && fetchedDestinations.length > 0 ? fetchedDestinations : topDestinations).map(dest => (
            <div key={dest.id} className="destination-card">
              <img
                src={dest.image_url ? dest.image_url : dest.image}
                alt={dest.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
              />
              <h3>{dest.name}</h3>
              <p>State: {dest.state}</p>
              <p>Category: {dest.category}</p>
              <Link to={`/destination/${dest.id}`}>
                <button className="view-details">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
