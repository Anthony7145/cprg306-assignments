//page.js
"use client"
import NewItem from './new-item';
import React from 'react';



export default function Week4Page() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2x1 font-bold mb-4">Shopping List</h1>
      <NewItem />
    </div>
  );
}