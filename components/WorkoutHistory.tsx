'use client';
import { useEffect, useState } from 'react';

export default function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    setWorkouts(storedWorkouts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4">Workout History</h2>
      {workouts.length === 0 && <p>No workouts logged yet.</p>}
      <ul>
        {workouts.map((w, i) => (
          <li key={i} className="border-b py-2">
            {w.date}: {w.exercise} - {w.sets} sets x {w.reps} reps ({w.weight} lbs)
          </li>
        ))}
      </ul>
    </div>
  );
}
