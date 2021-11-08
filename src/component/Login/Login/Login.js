import { Alert, Button, CircularProgress, Container, Grid, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../../../images/login.png'
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';




const Login = () => {
  const {logIn , isLoading , error , user , googleSign } = useAuth();
  // handle inputfield 
  const [formData , setFormData] = useState({})
  const hanldleTextField = (e) =>{
    const field = e.target.name;
    const value = e.target.value;
    const newFormData = {...formData};
    newFormData[field] = value;
    setFormData(newFormData);
  }
  
  const history = useHistory();
  const location = useLocation();
  const locationis = location?.state?.from?.pathname
  console.log(locationis)
 
  // handle from 
  const handleForm = e =>{
    e.preventDefault();
    logIn(formData.email , formData.password , history , location)
    
  }

  // google sing in
  const handleGoogle = () =>{
    googleSign(location , history)
  }
    return (
    <Container>
       <Box>
         <Grid container spacing={5}>
            <Grid item xs={12} md={6} sx={{mt: 5}}>
              <Typography variant="h4" sx={{textAlign: 'center' , mb: 5 , color: '#41F1FF'}}> Login Form </Typography>
               {
                 !isLoading  &&  <form onSubmit={handleForm} style={{display: 'flex' , flexDirection: 'column'}}>
               <TextField
          required
          id="outlined-required"
          type="email"
          name='email'
          onChange={hanldleTextField}
          placeholder='Your Email*'
        />
        <TextField
          id="outlined-disabled"
          name='password'
          type='password'
          placeholder='Your Password*'
          sx={{my: 2}}
          onChange={hanldleTextField}
        />
        <Link style={{textDecoration: 'none' , marginBottom: '10px' , color: 'blue'}} to={`/register${locationis || '/home'}`}> New to doctor portal ?</Link>
         <Button type='submit' variant='contained'> Login </Button>
         <p>====================================================</p>
         <Button onClick={handleGoogle} sx={{background: 'blue'}} variant="contained">Sign in with google  </Button>
         
         {
          error && <Alert sx={{mt: 2}} severity="error">{error}</Alert>
        }


               </form>
               }
               {
                 isLoading && <div style={{textAlign: 'center' , marginTop: '200px'}}>
                 <CircularProgress />
               </div>
               }

           {user.email && <Alert sx={{mt: 2}} severity="success">user login successfully</Alert>
                     } 
            </Grid>
            <Grid item xs={12} md={6}>
            <img width='100%' src={loginimg} alt="" />
            </Grid>
         </Grid>
        
       </Box>
    </Container>
  );
};

export default Login;