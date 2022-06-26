import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Header from "./Header";
import { Container } from '@mui/material';
import ReactLoading from 'react-loading';

const ComponentLoader = ({ Component }) => {
  const { isLoading } = useContext(UserContext);

  return (
    isLoading ? (
      <Container 
        maxWidth="100%"
        sx={{
          backgroundColor: "#f1f5f9",
          height: "100vh",
          width: "100%",
          display: "grid",
          placeItems: "center"
        }}
      >
        <div>
          <ReactLoading type="spin" color="#22d3ee" height={50} width={50} />
        </div>
      </Container>
    ): (
      <>
        <Header />
        <Component />
      </>
    )
  )
}

export default ComponentLoader