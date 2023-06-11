import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signin } = useAuth();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;

    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate('/hospitals');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Sign In
            </Button>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}















// import React, { useState, useEffect, FormEvent } from "react";
// import { auth } from "./Firebase";
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// const LoginForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [name, setName] = useState<string | null>(null);

//   useEffect(() => {
//     // Check if the user is already logged in
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setLoggedIn(true);
//         setName(user.displayName || null);
//       } else {
//         setLoggedIn(false);
//         setName(null);
//       }
//     });

//     return () => {
//       // Unsubscribe from the auth state listener when component unmounts
//       unsubscribe();
//     };
//   }, []);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Login successful");
//       navigate("/hospitals");
//       setLoggedIn(true);
//       setName(auth.currentUser?.displayName || null);
//     } catch (error) {
//       console.log("Login failed:", error);
//     }
//   };

//   const handleSignIn = async (provider: GoogleAuthProvider) => {
//     try {
//       await signInWithPopup(auth, provider);

//       navigate("/hospitals");
//       setLoggedIn(true);
//       setName(auth.currentUser?.displayName || null);
//     } catch (error) {
//       alert(`${provider.providerId} login failed`);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log("Logout successful");
//       navigate("/");
//       setLoggedIn(false);
//       setName(null);
//     } catch (error) {
//       console.log("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="login-form-wrapper">
//       <div className="login-form">
//         <h1>Login</h1>
//         {loggedIn ? (
//           <div>
//             <h1>Welcome, {name || ""}!</h1>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               className="login-methods"
          
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         )}

//         {!loggedIn && (
//           <div className="login-methods">
//             <button onClick={() => handleSignIn(new GoogleAuthProvider())}>
//               Sign in with Google
//             </button>
//           </div>
//         )}

//         {!loggedIn && (
//           <button onClick={() => navigate("/register")}>
//             Need an account? Register
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
