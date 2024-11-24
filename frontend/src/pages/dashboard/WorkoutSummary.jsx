import React from 'react';
import './WorkoutSummary.css'; // Assuming you have a CSS file for styles

const WorkoutSummary = ({ workouts }) => {
    return (
        <section className="workout-summary">
            <h2>Workout Summary</h2>
            <div className="recent-workouts">
                <h3>Recent Workouts</h3>
                {workouts.length > 0 ? (
                    <ul>
                        {workouts.map((workout, index) => (
                            <li key={index} className="workout-item">
                                <strong>{workout.date}</strong>: {workout.type} - {workout.duration} mins
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recent workouts recorded.</p>
                )}
            </div>
            <div className="weekly-activity">
                <h3>Weekly Activity</h3>
                {/* Placeholder for a chart or graph component */}
                <div className="chart-placeholder">
                    <p>Chart showing weekly activity will be here.</p>
                </div>
            </div>
            <div className="personal-bests">
                <h3>Personal Bests</h3>
                {/* Example personal bests - this can be dynamic */}
                <ul>
                    <li>Bench Press: 100 kg</li>
                    <li>Squat: 120 kg</li>
                    <li>Deadlift: 140 kg</li>
                </ul>
            </div>
        </section>
    );
};

export default WorkoutSummary;