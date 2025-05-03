'use client';
import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('username') || '');
  }, []);

  const saveName = () => {
    localStorage.setItem('username', name);
    alert('Profile saved!');
  };

  return (
    <div className="p-4 border rounded-lg my-4">
      <h2 className="font-bold">User Profile</h2>
      <input className="border p-2 w-full my-2" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={saveName}>Save Profile</button>
    </div>
  );
}
