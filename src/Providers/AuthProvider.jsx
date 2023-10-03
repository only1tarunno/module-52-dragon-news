import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [spinner, setspinner] = useState(true);
  // register user
  const registerUser = (email, password) => {
    setspinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login user
  const logIn = (email, password) => {
    setspinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    setspinner(true);
    return signOut(auth);
  };

  //   Observe user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observing", currentUser);
      setuser(currentUser);
      setspinner(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, registerUser, logIn, logOut, spinner };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
