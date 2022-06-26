import React, { useState, useContext } from 'react';
import { Button, Link, TextField, Typography, CssBaseline, Container } from '@mui/material';
import { Box } from '@mui/system';
import { UserContext } from '../../context/UserContext';
import AuthGuard from '../../components/AuthGuard';

const Recovery = () => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { recoverAccount, recoveryError } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    recoverAccount(email);
    if(!recoveryError) setHasSubmitted(true);
  }

  return (
    <AuthGuard isLoggedIn={false}>
      {hasSubmitted ? (
        <Box p={2}>
          <Typography variant='h5'>
            Please check your emails. If you don&apos;t see it, try checking your spam folder.
          </Typography>
        </Box>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography color="red">
                {recoveryError}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 1 }}
              >
                Recover Account
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </AuthGuard>
  )
}

export default Recovery