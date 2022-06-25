import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderNotLoggedIn from "./HeaderNotLoggedIn";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    user ? (
      <HeaderLoggedIn />
    ) : (
      <HeaderNotLoggedIn />
    )
  )
}

export default Header