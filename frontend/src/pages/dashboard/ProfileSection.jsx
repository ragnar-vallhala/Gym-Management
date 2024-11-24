import React from 'react';
import './ProfileSection.css'; // Assuming you have a CSS file for styles

const ProfileSection = ({ user }) => {
    return (
        <section className="profile-section">
            <h2>User Profile</h2>
            <div className="profile-content">
                <div className="profile-picture-container">
                    <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                </div>
                <div className="profile-details">
                    <h3>{user.name}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Membership Status:</strong> {user.membershipStatus}</p>
                    <button className="edit-profile-button">Edit Profile</button>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;