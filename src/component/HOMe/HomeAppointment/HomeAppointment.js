 import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
 import doctorimg from '../../../images/doctor.png'
 import bgImg from '../../../images/bg.png'
 import bg from '../../../images/appointment-bg.png'

 const bgimg ={
   background: `url(${bg})`,
   backgroundColor: 'rgb(44, 63, 68 , .9)',
   backgroundBlendMode:' darken, luminosity'
 }
 
 const HomeAppointment = () => {
   return (
    <Box sx={{margin: '150px 0'}} style={bgimg}>
       <Container sx={{my: 10}}>
       <Grid container sx={{textAlign: 'center'}} >
         <Grid item md={6}>
            <img width="350" height='400' style={{marginTop: '-90px' , marginBottom: '-5px'}} src={doctorimg} alt="" />
         </Grid>
         <Grid item md={6} sx={{textAlign:'left' , mt: 4 , color: 'white'}}>
            <Typography sx={{color: '#07D6C8'}} variant='h5'>Appointment </Typography>
            <Typography sx={{marginTop: '10px'}} variant='h4'>Make an appointment  </Typography>
            <Typography sx={{fontSize: '14px' , width: '57%' , my: 5}}>it is a long established fact that a reader will be distracted by the readable contect of a page when looking at its layout.  </Typography>
            <Button variant='contained'> Learn more </Button>
         </Grid>
         
     </Grid>
     </Container>
    </Box>
   );
 };
 
 export default HomeAppointment;