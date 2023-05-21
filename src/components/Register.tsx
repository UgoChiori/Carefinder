import React from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";
import "./register.css";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RegistrationForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Perform registration logic
      console.log("Registration successful");
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Perform registration logic
      console.log("Google sign-up successful");
    } catch (error) {
      console.log("Google sign-up failed:", error);
    }
  };

  const handleGithubSignUp = async () => {
    const provider = new GithubAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Perform registration logic
      console.log("GitHub sign-up successful");
    } catch (error) {
      console.log("GitHub sign-up failed:", error);
    }
  };

  return (
    <div className="registration-form-wrapper">
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
          <button onClick={handleGoogleSignUp}><FaGoogle/></button>
          <button onClick={handleGithubSignUp}><FaGithub/></button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// import { auth } from "./Firebase";
// import "./register.css";
// import UserProfile from "./UserProfile";
// import { FaGithub, FaGoogle } from "react-icons/fa";

// const RegistrationForm: React.FC = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [registered, setRegistered] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Perform registration logic
//       console.log("Registration successful");
//       setRegistered(true);
//     } catch (error) {
//       console.log("Registration failed:", error);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     const provider = new GoogleAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // Perform registration logic
//       console.log("Google sign-up successful");
//       setRegistered(true);
//     } catch (error) {
//       console.log("Google sign-up failed:", error);
//     }
//   };

//   const handleGithubSignUp = async () => {
//     const provider = new GithubAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // Perform registration logic
//       console.log("GitHub sign-up successful");
//       setRegistered(true);
//     } catch (error) {
//       console.log("GitHub sign-up failed:", error);
//     }
//   };

//   if (registered) {
//     return (
//       <div>
//         <h1>Welcome, {email}!</h1>
//         <UserProfile />
//       </div>
//     );
//   }

//   return (
//     <div className="registration-form-wrapper">
//       <div className="registration-form">
//         <h2>Registration Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit">Register</button>
//           <button onClick={handleGoogleSignUp}><FaGoogle/></button>
//           <button onClick={handleGithubSignUp}><FaGithub/></button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;