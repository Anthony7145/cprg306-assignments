"use client";
import  { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import MealIdeas here
import itemsData from './items.json';
import Heading from './heading';


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-blue-100 p-4" style={{ display: 'flex' }}>
      <div style={{ flex: 2 }}>
        <Heading title="Shopping List" />
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
