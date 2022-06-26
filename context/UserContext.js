import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [recoveryError, setRecoveryError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user))
  }, [])
  
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential)
      })
      .catch((error) => {
        setLoginError(error.message);
      })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setLoginError(null);
        setUser(userCredential)
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  }

  const registerUser = (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setRegisterError(null);
        updateProfile(userCredential.user, {
          displayName: name
        })
        .then(() => setUser(userCredential.user));
      })
      .catch((error) => {
        setRegisterError(error.message);
      })
  }

  const authSignOut = () => {
    signOut(auth);
    setUser(null);
  }

  const recoverAccount = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        setRecoveryError(null);
      })
      .catch((error) => {
        setRecoveryError(error.message);
      })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        authSignOut,
        signIn,
        signInWithGoogle,
        registerUser,
        loginError,
        registerError,
        recoverAccount,
        recoveryError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}