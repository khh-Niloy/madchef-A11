import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

export const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  function createUser(email, password) {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    setloading(true);
    return signOut(auth);
  }

  const provider = new GoogleAuthProvider();
  function googleSignIn() {
    return signInWithPopup(auth, provider);
  }

  function profileInfo(updateInfo) {
    updateProfile(auth.currentUser, updateInfo);
    setuser((prev) => ({
      ...prev,
      displayName: updateInfo.displayName,
      photoURL: updateInfo.photoURL,
    }));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ createUser, signInUser, signOutUser, googleSignIn, user, profileInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
