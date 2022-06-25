import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, user, loginError } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  } 
  
  return (
    <Container className='shadow'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <Typography my={2} color="red" align='center'>
          {loginError}
        </Typography>
        <Button
          fullWidth
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <Box my={2}>
        <Button
          onClick={signInWithGoogle}
          color='secondary'
          fullWidth
          type="submit"
          variant="contained"
        >
          Sign in with Google
        </Button>
      </Box>
      <Box my={2}>
        <Link href="/auth/register">
          <Button
            color='info'
            fullWidth
            type="submit"
            variant="contained"
          >
            Create an account
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default Login