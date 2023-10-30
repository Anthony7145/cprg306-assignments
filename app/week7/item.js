import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <li onClick={handleClick} className="cursor-pointer border border-blue-500 bg-blue-800 m-1 p-2">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </li>
  );
}
