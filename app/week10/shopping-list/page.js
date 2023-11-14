import React, { useEffect, useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import Router from 'next/router';
import { dbGetItems, dbAddItem } from '../_services/shopping-list-service';

const ShoppingListPage = () => {
  // Retrieve the user object using the useUserAuth hook
  const { user } = useUserAuth();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if( user ){
      dbGetItems(user.uid , setItemList );
    }
  }, [user]);


  // Function to handle adding a new item
const handleAddItem = async () => {
  try {
    // Call addItem to add the item to the shopping list
    const newItemId = await dbAddItem(user.uid, { text: newItemText });

    // Create a new item object with the returned ID and text
    const newItem = { id: newItemId, text: newItemText };

    // Update the state of items to include the new item
    setItems((prevItems) => [...prevItems, newItem]);

    // Clear the input field after adding the item
    setNewItemText('');
  } catch (error) {
    console.error('Error adding item: ', error);
  }
};

  // Check if the user is not logged in
  if (!user) {
    // Optionally, redirect the user to the landing page
    // Replace '/landing' with the actual path of your landing page
    // Example: Router.push('/landing');
    return (
      <div>
        <p>You need to be logged in to view the shopping list. Please log in.</p>
      </div>
    );
  }

  // Render the shopping list page content for logged-in users
  return (
    <div>
      <h1>Shopping List</h1>
      {/* Add your shopping list content here */}
    </div>
  );
};

export default ShoppingListPage;