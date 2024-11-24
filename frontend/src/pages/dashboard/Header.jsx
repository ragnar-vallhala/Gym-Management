import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styles

const Header = ({ userName, profilePicture }) => {
    return (
        <header className="dashboard-header">
            <div className="header-content">
                <h1>Welcome back, {userName}!</h1>
                <div className="profile-info">
                    <img src={profilePicture} alt="Profile" className="profile-picture" />
                    <nav className="navigation">
                        <ul>
                            <li><a href="#workout-summary">Workout Summary</a></li>
                            <li><a href="#nutrition-tracker">Nutrition Tracker</a></li>
                            <li><a href="#class-schedule">Class Schedule</a></li>
                            <li><a href="#progress-tracking">Progress Tracking</a></li>
                            <li><a href="#community-features">Community</a></li>
                            <li><a href="#resources">Resources</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;