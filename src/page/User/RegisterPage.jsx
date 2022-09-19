import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeNav from '../../component/HomeNav';
import { useState } from 'react';
import userService from '../../Service/userService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        DevCom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const[errors, setErrors] = useState('');

  const saveUser = (e) => {
    e.preventDefault();

    const user = {userName, password};
    const errors = validate({...user});
    if(Object.keys(errors).length === 0){
      userService.register(user)
      .then(response => {
        console.log("user registered", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `User registered.`,
          showConfirmButton: false,
          timer: 3500
      });
      navigate("/login");
      })
      .catch(error => {
        if(userName){
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `User already Exists`,
            showConfirmButton: false,
            timer: 3500
        });
        }
        console.log("registration failed", error);
      })
    }
    else{
      setErrors(errors);
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (<>
  <HomeNav/>
  <br/><br/>
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="family-name"
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors.userName && <p style={{color: 'red'}}>{errors.userName}</p>}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => saveUser(e)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );

  function validate({userName, password}) {
    let errors = {};
    if (!userName?.trim()) {
      errors.userName = 'Username required';
    }else if (!/\S+@\S+\.\S+/.test(userName)) {
      errors.userName = 'Username is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    return errors;
  }
}
