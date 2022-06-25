import React, { useContext, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { UserContext } from '../../context/UserContext';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerUser, user, registerError } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password, confirmPassword);
  }

  return (
    <Container className='shadow'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField 
            onChange={(e) => setName(e.target.value)}
            label="Name" 
            variant="filled" 
            fullWidth
            value={name}
          />
        </Box>
        <Box mb={2}>
          <TextField 
           onChange={(e) => setEmail(e.target.value)}
            label="Email" 
            variant="filled" 
            fullWidth
            type="email"
            value={email}
          />
        </Box>
        <Box mb={2}>
          <TextField 
            onChange={(e) => setPassword(e.target.value)}
            label="Password" 
            variant="filled"   
            fullWidth
            type="password"
            value={password}
          />
        </Box>
        <Box mb={2}>
          <TextField 
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password" 
            variant="filled"   
            fullWidth
            type="password"
            value={confirmPassword}
          />
        </Box>
        <Typography my={2} color="red" align='center'>
          {registerError}
        </Typography>
        <Button
          fullWidth
          type="submit"
          variant="contained"
        >
          Register
        </Button>
      </form>
    </Container>
  )
}

export default Register