"use client";
import React, { useState } from "react";
import Item from "./item"; 
import Heading from "./heading";
import items from './items.json'; // Import the 'items' from the JSON file

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  // Function to sort the items based on the sortBy state
  const sortItems = (items) => {
    return items.slice().sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0; // Default to no sorting
    });
  };

  // Function to handle item selection
  const handleItemSelection = (item) => {
    // Call the onItemSelect prop with the selected item
    onItemSelect(item);
  };

  return (
    <>
      <Heading title="Shopping List" />

      {/* Buttons to change sortBy with conditional background color */}
      <div>
        <button
          onClick={() => setSortBy('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'black' : 'orange',
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'black' : 'orange',
          }}
        >
          Sort by Category
        </button>
      </div>

      {items.length > 0 && (
        <ul>
          {sortItems(items).map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              // Pass the handleItemSelection function as onSelect prop
              onSelect={() => handleItemSelection(item)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
