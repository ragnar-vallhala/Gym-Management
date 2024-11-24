import './WorkoutPlan.css';

function WorkoutPlanCard() {
  const workouts = [
    { name: "Situp", reps: "4", duration: "15min", rest_period: "4min" },
    { name: "Pushup", reps: "3", duration: "10min", rest_period: "3min" },
    { name: "Squat", reps: "5", duration: "20min", rest_period: "5min" },
    { name: "Lunges", reps: "4", duration: "15min", rest_period: "4min" },
    { name: "Plank", reps: "2", duration: "5min", rest_period: "2min" },
  ];

  return (
    <div className="workout-plan-card">
      <h3>Workout Plan</h3>
      <p>Active Plan</p>
      <ul className="workout-list">
        {workouts.map((workout, index) => (
          <li key={index} className="workout-item">
            <h4>{workout.name}</h4>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Duration:</strong> {workout.duration}</p>
            <p><strong>Rest Period:</strong> {workout.rest_period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutPlanCard;

