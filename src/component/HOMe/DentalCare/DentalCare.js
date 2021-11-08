import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import dentalImg from '../../../images/treatment.png'



const DentalCare = () => {
  return (
   <Container>
     <Grid container sx={{textAlign: 'center'}} >
         <Grid item md={6}>
            <img width="350" height='400' src={dentalImg} alt="" />
         </Grid>
         <Grid item md={6} sx={{textAlign:'left' , mt: 4}}>
            <Typography variant='h4'>Exceptional Dental Care, on Your Terms </Typography>
            <Typography sx={{fontSize: '14px' , width: '57%' , my: 3}}>it is a long established fact that a reader will be distracted by the readable contect of a page when looking at its layout. the point of using lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, odio voluptatibus numquam ex voluptas porro quae commodi libero illo iure? </Typography>
            <Button variant='contained'> Learn more </Button>
         </Grid>
         
     </Grid>
   </Container>
  );
};

export default DentalCare;