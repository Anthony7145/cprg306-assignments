import React from 'react';
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('GitHub Sign-In Error:', error);
    }
  };

  const handleFirebaseSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Firebase Sign-Out Error:', error);
    }
  };

  return (
    <div>
      {user ? (
        // User is logged in
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleFirebaseSignOut}>Logout</button>
          <Link href="/shopping-list">
            <a>Go to Shopping List</a>
          </Link>
        </div>
      ) : (
        // User is not logged in
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default Page;