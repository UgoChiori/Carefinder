import React from "react";
import Profile from "./Profilepage";

const UserProfile: React.FC = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };

  return (
    <div>
      <h1>User Profile</h1>
      <Profile {...user} />
    </div>
  );
};

export default UserProfile;