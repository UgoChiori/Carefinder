import React from "react";
import Profile from "./Profilepage";
import "./profilepage.css"

const UserProfile: React.FC = () => {
  // Sample user data
  const user = {
    name: "Ugo",
    age: 0,
    email: "okon",
    
  };

  return (
    <div className="userprofile">
      <h1>User Profile</h1>
      <Profile {...user} />
    </div>
  );
};

export default UserProfile;