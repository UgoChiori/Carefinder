import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

interface User {
  uid: string;
  email: string;
}

interface AuthContextProps {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<User | void>;
  signin: (email: string, password: string) => Promise<User | void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string): Promise<User | void> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user as User;
      console.log(user);
      setCurrentUser(user);
      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    }
  }

  async function signin(email: string, password: string): Promise<User | void> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user as User;
      console.log(user);
      setCurrentUser(user);
      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    }
  }

  async function logout(): Promise<void> {
    await auth.signOut();
  }

  async function resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user as User);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextProps = {
    currentUser,
    signup,
    signin,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}



// import React, { useContext, useState, useEffect, createContext } from "react";
// import { auth } from "../components/Firebase";
// import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

// interface User {
//   uid: string;
//   email: string;
// }

// interface AuthContextProps {
//   currentUser: User | null;
//   signup: (email: string, password: string) => Promise<User | void>;
//   signin: (email: string, password: string) => Promise<User | void>;
//   logout: () => Promise<void>;
//   resetPassword: (email: string) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export function useAuth(): AuthContextProps {
//   const context = useContext(AuthContext);
  
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   async function signup(email: string, password: string): Promise<User | void> {
//     try {
//       const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user as User;
//       console.log(user);
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       return;
//     }
//   }

//   async function signin(email: string, password: string): Promise<User | void> {
//     try {
//       const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user as User;
//       console.log(user);
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       return;
//     }
//   }

//   async function logout(): Promise<void> {
//     await auth.signOut();
//   }

//  function resetPassword(email: string): Promise<void> {
//     try {
//       return sendPasswordResetEmail(auth, email);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       return;
//     } 
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value: AuthContextProps = {
//     currentUser,
//     signup,
//     signin,
//     logout,
//     resetPassword: function (): Promise<void> {
//       throw new Error("Function not implemented.");
//     }
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }










// import React, { useContext, useState, useEffect, createContext } from "react";
// import { auth } from "../components/Firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// interface User {
//   uid: string;
//   email: string;
// }

// interface AuthContextProps {
//   currentUser: User | null;
//   signup: (email: string, password: string) => Promise<User | void>;
//   signin: (email: string, password: string) => Promise<User | void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export function useAuth(): AuthContextProps {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   async function signup(email: string, password: string): Promise<User | void> {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log(user);
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     }
//   }

//   async function signin(email: string, password: string): Promise<User | void> {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log(user);
//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     }
//   }

//   async function logout(): Promise<void> {
//     try {
//       await auth.signOut();
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     }
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value: AuthContextProps = {
//     currentUser,
//     signup,
//     signin,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

