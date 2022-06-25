import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, provider } from "../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  
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
        updateProfile(userCredential.user, {
          displayName: name
        })
        .then(() => setUser(userCredential.user));
      })
      .catch((error) => {
        setRegisterError(error.message);
      })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        signInWithGoogle,
        registerUser,
        loginError,
        registerError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}