import { Button, Paper, TextField, Typography, Grid, CssBaseline, Container } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import AuthGuard from '../../components/AuthGuard';
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
    <AuthGuard isLoggedIn={false}>
     <Grid container component="main" sx={{ height: '95vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography color="red">
                {loginError}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ my: 1 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/auth/recovery" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button
                onClick={signInWithGoogle}
                fullWidth
                color='secondary'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In With Google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AuthGuard>
  )
}

export default Login