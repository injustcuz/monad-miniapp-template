'use client';
import { useState } from 'react';

export default function ExerciseForm() {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push({ exercise, sets, reps, weight, date: new Date().toLocaleDateString() });
    localStorage.setItem('workouts', JSON.stringify(workouts));
    alert('Workout Logged!');
  };

  return (
    <form className="space-y-4 p-4" onSubmit={handleSubmit}>
      <input className="border p-2 w-full" placeholder="Exercise Name" required value={exercise} onChange={(e)=>setExercise(e.target.value)} />
      <input className="border p-2 w-full" type="number" placeholder="Sets" required value={sets} onChange={(e)=>setSets(e.target.value)} />
      <input className="border p-2 w-full" type="number" placeholder="Reps" required value={reps} onChange={(e)=>setReps(e.target.value)} />
      <input className="border p-2 w-full" type="number" placeholder="Weight (lbs)" required value={weight} onChange={(e)=>setWeight(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Log Exercise</button>
    </form>
  );
}
