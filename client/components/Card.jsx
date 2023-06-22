import React from 'react';
export default function Card({ name, breed, age, size }) {
  return (
    <div className="card">
      <p>name: {name}</p>
      <p>breed: {breed}</p>
      <p>age: {age} </p>
      <p>size: {age} </p>
    </div>
  );
}
