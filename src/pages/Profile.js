import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        {/* Replace with an actual image URL */}
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>
      <div className="profile-details">
        <h1>John Doe</h1>
        <p>Electrical and Electronics Engineer</p>
        <p>
          Passionate about coding, electronics, and building innovative solutions.
        </p>
        <ul className="profile-links">
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
