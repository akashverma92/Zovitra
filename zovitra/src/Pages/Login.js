// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/login', formData, {
//         withCredentials: true, // For session handling
//       });

//       console.log('Login Response:', response.data);

//       if (response.data.success) {
//         console.log('Success ' + response.data)
//         localStorage.setItem('user', JSON.stringify(response.data.user)); 
//         navigate('/home'); // Redirect to Home Page
//       }
//       else {
//         setError(response.data.message || 'Invalid username or password');
//       }
//     } catch (err) {
//       console.error('Login Error:', err);
//       setError('An error occurred while logging in. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p className="redirect-text">
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData, {
        withCredentials: true, // For session handling
      });

      console.log('Login Response:', response.data);

      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        
        const role = response.data.user.role; // Extract role from response

        if (role === 'admin') {
          navigate('/admin-dashboard'); // Redirect to Admin Dashboard
        } else {
          navigate('/home'); // Redirect to User Page
        }
      } else {
        setError(response.data.message || 'Invalid username or password');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="redirect-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
