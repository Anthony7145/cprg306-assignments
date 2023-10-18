"use client"
import Item from './item'; 
import React, { useState } from 'react';
import itemsData from './items.json';
 

const ItemList = () => {

  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState(itemsData);

  const sortedItems = items.map(item => item).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0; 
  });

  return (
    <div >
    <div >
      <button
        onClick={() => setSortBy('name')}
        className={`button-style ${sortBy === 'name' ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' :
         ' py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'}`}
        >
        Sort by Name
      </button>
      <button  
        onClick={() => setSortBy('category')}
        className={`button-style ${sortBy === 'category' ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' :
        ' py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'}`}
       >
        Sort by Category
      </button>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
    </ul>
  </div>
  );
};

export default ItemList;

