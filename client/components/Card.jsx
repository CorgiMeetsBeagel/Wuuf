import React from 'react';
export default function Card({ name, breed, age, size }) {
  return (
    <div className="absolute bottom-25 left-0 h-16 w-16">
      <p>Name: {name}</p>
      <p>Breed: {breed}</p>
      <p>Age: {age} </p>
      <p>Size: {size} </p>
    </div>
  );
}
