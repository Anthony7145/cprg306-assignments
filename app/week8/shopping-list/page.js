import React from 'react';
import { useUserAuth } from "../_utils/auth-context";
import Router from 'next/router';

const ShoppingListPage = () => {
  // Retrieve the user object using the useUserAuth hook
  const { user } = useUserAuth();

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