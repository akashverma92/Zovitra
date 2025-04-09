// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const DestinationDetail = () => {
//   const { id } = useParams(); 
//   const [destination, setDestination] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDestinationDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/destinations/${id}`);
//         setDestination(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching destination details:', error);
//         setError('Failed to load destination details.');
//         setLoading(false);
//       }
//     };

//     fetchDestinationDetails();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>{destination.name}</h1>
//       <p>{destination.description}</p>
//       <p>Location: {destination.location}</p>
//       <p>Category: {destination.category}</p>
//       <p>Best Time to Visit: {destination.best_time_to_visit}</p>
//       <img src={destination.image_url} alt={destination.name} style={{ height : '100', maxHeight : '500px',width: '100%', maxWidth: '500px' }} />
//     </div>
//   );
// };

// export default DestinationDetail;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DestinationDetail.css"; // Import the CSS file

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestinationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/destinations/${id}`);
        setDestination(response.data);
      } catch (error) {
        console.error("Error fetching destination details:", error);
      }
    };
    fetchDestinationDetails();
  }, [id]);

  if (!destination) {
    return <div className="loading">Loading destination details...</div>;
  }

  return (
    <div className="destination-detail">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${destination.image_url})` }}>
        <h1>{destination.name}</h1>
      </div>

      {/* Destination Details Section */}
      <div className="content">
        <div className="info-card">
          <h2>📍 Location</h2>
          <p>{destination.location}, {destination.state}</p>
        </div>

        <div className="info-card">
          <h2>📝 Description</h2>
          <p>{destination.description}</p>
        </div>

        <div className="info-card">
          <h2>🌟 Category</h2>
          <p>{destination.category}</p>
        </div>

        <div className="info-card">
          <h2>📅 Best Time to Visit</h2>
          <p>{destination.best_time_to_visit}</p>
        </div>

        <div className="info-card">
          <h2>🎯 Activities</h2>
          <p>{destination.activities}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
