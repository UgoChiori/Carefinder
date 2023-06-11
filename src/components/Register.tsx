import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      passwordRef.current?.value !== passwordConfirmRef.current?.value
    ) {
      return setError("Passwords Do Not Match");
    }

    try {
      setError("");
      setLoading(true);
      if (emailRef.current && passwordRef.current) {
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate("/hospitals");
      }
    } catch {
      setError("Failed To Create An Account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
};

export default Signup;
















// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./Firebase";
// import "./register.css";
// import { FaGoogle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const RegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [registered, setRegistered] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Perform registration logic
//       console.log("Registration successful");
//       setRegistered(true);
//       navigate("/hospitals"); // Navigate to the "/hospitals" route
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
//       navigate("/hospitals"); // Navigate to the "/hospitals" route
//     } catch (error) {
//       console.log("Google sign-up failed:", error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log("Logout successful");
//       window.location.href = "/";
//     } catch (error) {
//       console.log("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="registration-form-wrapper">
//       {registered ? (
//         <div>
//           <h1>Welcome, {name}!</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div className="registration-form">
//           <h2>Registration Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button onClick={() => navigate("/hospitals")} type="submit">Register</button>

//             <button onClick={handleGoogleSignUp}>
//               <FaGoogle />
//             </button>
//           </form>
//           <button onClick={() => navigate("/login")}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationForm;