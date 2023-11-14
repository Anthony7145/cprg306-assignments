import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Add the getItems function
export async function dbGetItems(userId , updateItems) {
  const items = [];

  try {
    // const itemsCollection = collection(db, `users/${userId}/items`);
    const itemsCollection = collection(db, 'users', userId, 'items');
    const querySnapshot = await getDocs(itemsCollection);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error getting items: ', error);
    throw error;
  }

  // return items;
  updateItems(items);
}

// Add the addItem function
export async function dbAddItem(userId, item) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);

    return docRef.id; // Return the id of the newly created document
  } catch (error) {
    console.error('Error adding item: ', error);
    throw error;
  }
}