import React, { useState } from "react";

type ProfileProps = {
  name: string;
  age: number;
  email: string;
};

const Profile: React.FC<ProfileProps> = ({ name, age, email }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAge, setEditedAge] = useState(age);
  const [editedEmail, setEditedEmail] = useState(email);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAge(parseInt(e.target.value, 10));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(e.target.value);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      setProfilePicture(selectedFile);
      setPreviewURL(URL.createObjectURL(selectedFile));
    }
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const saveChanges = () => {
    // Perform the necessary actions to save the changes (e.g., update server, dispatch Redux action, etc.)
    // For this example, we'll simply log the changes and the profile picture to the console.
    console.log("Name:", editedName);
    console.log("Age:", editedAge);
    console.log("Email:", editedEmail);
    console.log("Profile Picture:", profilePicture);

    // Exit edit mode
    toggleEditMode();
  };

  return (
    <div>
      {editMode ? (
        <>
          <label>Name:</label>
          <input type="text" value={editedName} onChange={handleNameChange} />
          <br />
          <label>Age:</label>
          <input type="number" value={editedAge} onChange={handleAgeChange} />
          <br />
          <label>Email:</label>
          <input type="email" value={editedEmail} onChange={handleEmailChange} />
          <br />
          <label>Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureChange} />
          {previewURL && <img src={previewURL} alt="Profile" style={{ width: "100px" }} />}
          <br />
          <button onClick={saveChanges}>Save</button>
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <button onClick={toggleEditMode}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Profile;