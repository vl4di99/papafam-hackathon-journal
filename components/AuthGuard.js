import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Router from "next/router";

const AuthGuard = ({ children, isLoggedIn = true }) => {
  const { user } = useContext(UserContext);

  const redirect = () => {
    Router.push("/");
  }

  return (
    ((!isLoggedIn && !user) || (isLoggedIn && user)) ? (
      <div>{children}</div>
    ) : (
      <div onClick={redirect()} />
    )
  )
}

export default AuthGuard