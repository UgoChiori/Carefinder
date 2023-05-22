import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";
import "./login.css";
import UserProfile from "../components/profile/UserProfile";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Perform login logic
      console.log("Login successful");
      setLoggedIn(true);
      setName(email.split("@")[0]); // Extract the name from the email
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Perform login logic
      console.log("Google sign-in successful");
      setLoggedIn(true);
      setName(auth.currentUser?.displayName || "");
    } catch (error) {
      console.log("Google sign-in failed:", error);
    }
  };

  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Perform login logic
      console.log("GitHub sign-in successful");
      setLoggedIn(true);
      setName(auth.currentUser?.displayName || "");
    } catch (error) {
      console.log("GitHub sign-in failed:", error);
    }
  };

  if (loggedIn) {
    return (
      <div className="login-form-wrapper">
        <div className="login-form">
          <h1 className="welcome-message">Welcome, {name}!</h1>
          <div className="user-profile">
            <UserProfile />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;





// import React, { useState } from "react";
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// import { auth } from "./Firebase";
// import "./login.css";
// import UserProfile from "../components/profile/UserProfile";

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       // Perform login logic
//       console.log("Login successful");
//       setLoggedIn(true);
//     } catch (error) {
//       console.log("Login failed:", error);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // Perform login logic
//       console.log("Google sign-in successful");
//       setLoggedIn(true);
//     } catch (error) {
//       console.log("Google sign-in failed:", error);
//     }
//   };

//   const handleGithubSignIn = async () => {
//     const provider = new GithubAuthProvider();

//     try {
//       await signInWithPopup(auth, provider);
//       // Perform login logic
//       console.log("GitHub sign-in successful");
//       setLoggedIn(true);
//     } catch (error) {
//       console.log("GitHub sign-in failed:", error);
//     }
//   };

//   if (loggedIn) {
//     return (
//       <div className="login-form-wrapper">
//         <div className="login-form">
//           <h1 className="welcome-message">Welcome, {email}!</h1>
//           <div className="user-profile">
//             <UserProfile />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="login-form-wrapper">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit">Login</button>
//           <button onClick={handleGoogleSignIn}>Login with Google</button>
//           <button onClick={handleGithubSignIn}>Login with GitHub</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



// // import React, { useState } from "react";
// // import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// // import { auth } from "./Firebase";
// // import "./login.css";
// // import UserProfile from "../components/profile/UserProfile"

// // const LoginForm: React.FC = () => {
// //   const [email, setEmail] = React.useState("");
// //   const [password, setPassword] = React.useState("");
// //   const [loggedIn, setLoggedIn] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       // Perform login logic
// //       console.log("Login successful");
// //       setLoggedIn(true);
// //     } catch (error) {
// //       console.log("Login failed:", error);
// //     }
// //   };

// //   const handleGoogleSignIn = async () => {
// //     const provider = new GoogleAuthProvider();

// //     try {
// //       await signInWithPopup(auth, provider);
// //       // Perform login logic
// //       console.log("Google sign-in successful");
// //       setLoggedIn(true);
// //     } catch (error) {
// //       console.log("Google sign-in failed:", error);
// //     }
// //   };

// //   const handleGithubSignIn = async () => {
// //     const provider = new GithubAuthProvider();

// //     try {
// //       await signInWithPopup(auth, provider);
// //       // Perform login logic
// //       console.log("GitHub sign-in successful");
// //       setLoggedIn(true);
// //     } catch (error) {
// //       console.log("GitHub sign-in failed:", error);
// //     }
// //   };

// //   if (loggedIn) {
// //     return (
// //       <div>
// //         <h1>Welcome, {email}!</h1>
// //         <UserProfile />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="login-form-wrapper">
// //       <div className="login-form">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="email">Email:</label>
// //             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Password:</label>
// //             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //           </div>
// //           <button type="submit">Login</button>
// //           <button onClick={handleGoogleSignIn}>Login with Google</button>
// //           <button onClick={handleGithubSignIn}>Login with GitHub</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;




// // import React from "react";
// // import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// // import { auth } from "./Firebase";
// // import "./login.css";

// // const LoginForm: React.FC = () => {
// //   const [email, setEmail] = React.useState("");
// //   const [password, setPassword] = React.useState("");

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       // Perform login logic
// //       console.log("Login successful");
// //     } catch (error) {
// //       console.log("Login failed:", error);
// //     }
// //   };

// //   const handleGoogleSignIn = async () => {
// //     const provider = new GoogleAuthProvider();

// //     try {
// //       await signInWithPopup(auth, provider);
// //       // Perform login logic
// //       console.log("Google sign-in successful");
// //     } catch (error) {
// //       console.log("Google sign-in failed:", error);
// //     }
// //   };

// //   const handleGithubSignIn = async () => {
// //     const provider = new GithubAuthProvider();

// //     try {
// //       await signInWithPopup(auth, provider);
// //       // Perform login logic
// //       console.log("GitHub sign-in successful");
// //     } catch (error) {
// //       console.log("GitHub sign-in failed:", error);
// //     }
// //   };

// //   return (
// //     <div className="login-form-wrapper">
// //       <div className="login-form">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="email">Email:</label>
// //             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Password:</label>
// //             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //           </div>
// //           <button type="submit">Login</button>
// //           <button onClick={handleGoogleSignIn}>Login with Google</button>
// //           <button onClick={handleGithubSignIn}>Login with GitHub</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;