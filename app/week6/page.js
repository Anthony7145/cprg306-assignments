"use client";

import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from 'react';
import NewItem from "./new-item";


export default function Page() {
  const [items, setItems] = useState(itemsData.map((items) => (items)));
  const [newItemOpen, setNewItemOpen] = useState(false);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleCloseNewItem = () => {
    setNewItemOpen(false);
  };


  return (
    <main className="bg-[#bacee2] h-screen bg-gray w-full  justify-center  p-8 " >
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">  
      </h1>

      <button onClick={() => setNewItemOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>

    {newItemOpen && (
        <NewItem 
         onAddItem={handleAddItem}  
         onCloseNewItem={handleCloseNewItem}
        />
      )}
      
      <ItemList itemList={items}/>
    </main>
  );
} 
