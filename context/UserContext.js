import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, provider } from "../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loginError, setLoginError] = useState("");
  
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential)
        setLoginError(`${userCredential.user.email} has signed in`)
      })
      .catch((error) => {
        setLoginError(error.message);
      })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser(userCredential)
        setLoginError(`${userCredential.user.email} has signed in`)
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        signInWithGoogle,
        loginError
      }}
    >
      {children}
    </UserContext.Provider>
  )
}