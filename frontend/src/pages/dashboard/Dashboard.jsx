import React from "react";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import WorkoutSummary from "./WorkoutSummary";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    membershipStatus: "Active",
    profilePicture: "path/to/profile-picture.jpg", // Replace with dynamic URL
  };
  const workouts = [
    { date: "2023-10-01", type: "Weight Training", duration: 60 },
    { date: "2023-10-02", type: "Cardio", duration: 30 },
    { date: "2023-10-03", type: "Yoga", duration: 45 },
    // Add more workouts as needed
  ];
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <Header userName={"Ashutosh"} />
      </header>
      <section className="profile-section">
        <ProfileSection user={user} />
      </section>
      <section className="workout-summary">
        <WorkoutSummary workouts={workouts} />
      </section>
      <section className="nutrition-tracker">{/* Nutrition Tracker */}</section>
      <section className="class-schedule">{/* Upcoming Classes */}</section>
      <section className="progress-tracking">
        {/* Progress Tracking Graphs */}
      </section>
      <section className="community-features">
        {/* Community Features */}
      </section>
      <section className="notifications">
        {/* Notifications and Alerts */}
      </section>
      <section className="resources">{/* Articles and Videos */}</section>
    </div>
  );
};

export default Dashboard;
