import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from './authActions';
import '../Assets/css/dashboard.css'; // Import your dashboard CSS for styling

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch a logout action
    dispatch(logoutUser());
    // Redirect to the login page (you can use react-router-dom for this)
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">Admission portal</div>
        <ul>
          <li><a href="/profile">Profile Details</a></li>
          <li><a href="/academic">Academic Details</a></li>
          <li><a href="/application">Application Details</a></li>
        </ul>
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <button className='button' onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <main>
          {/* Your dashboard content goes here */}
            <div className="welcome">Welcome, {user.username}</div>
          <h1>Welcome to Your Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
