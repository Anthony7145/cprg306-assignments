// import React from 'react';


export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-100 rounded-lg p-3 mb-2 shadow-md">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gray-600">
        <span className="mr-2">Quantity: {quantity}</span>
        <span>Category: {category}</span>
      </div>
    </li>
  );
}
