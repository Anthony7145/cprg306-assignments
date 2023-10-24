"use Client"
import { useState } from 'react';



export default function NewItem ({onAddItem, onCloseNewItem}) {
  
  
  // Initialize state variables
  const [name, setName] = useState(''); // Name field, initially empty string
  const [quantity, setQuantity] = useState(1); // Quantity field, initially set to 1
  const [category, setCategory] = useState('produce'); // Category field, initially set to "Produce"

// Form submission handler
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission behavior

// generate random id

  // Create an item object with the current values
  const item = { name, quantity, category };

  // Log the item object to the console
  console.log(item);

  onAddItem(item);

  // Display an alert with the current state values
  //alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

  // Reset state variables to their initial values
  setName('');
  setQuantity(1);
  setCategory('produce');
};

/*
const onSubmit={handleSubmit} = (e) => {
  e.preventDefault();
  // Call the onAddItem prop with the item object
  onAddItem(item);
  // Reset the form
  setItem({
    name: '',
    quantity: '',
    category: '',
  });
};
*/

return (
 <main> 
  <div>
    <form onSubmit={handleSubmit}>
      {/* Your form inputs */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</main>
);
}

