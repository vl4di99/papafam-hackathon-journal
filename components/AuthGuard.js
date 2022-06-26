import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useRouter } from "next/router";

const AuthGuard = ({ children, isLoggedIn = true }) => {
  const { user, isLoading } = useContext(UserContext);
  const Router = useRouter();

  useEffect(() => {
    if (!isLoading && ((!isLoggedIn && user) || (isLoggedIn && !user))) {
      redirect()
    }
  }, [user])
  
  const redirect = () => {
    Router.push("/");
  }

  return (
    <div>{children}</div>
  )
}

export default AuthGuard