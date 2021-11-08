import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/doctor-small.png'

const doctors =[
  {name: 'Dr. Caudi' , img:`${img}` , phone:'+61 333 3433 4420'},
  {name: 'Dr. medan' , img:`${img}` , phone:'+61 133 3433 4420'},
  {name: 'Dr. Kaoya' , img:`${img}` , phone:'+61 233 3433 4420'}
]

const Doctor = () => {
  return (
    <Container sx={{my: 10 , textAlign: 'center'}}>
      <Typography sx={{fontSize: '20px' , color: '#10CACA' , textAlign:'center'}}>OUR DOCTOR </Typography>
       <Box>
            <Grid container spacing={5} sx={{mt: 3}} >
              {
                doctors.map(doctor=> {
                  return(
                    <Grid key={doctor.phone} item md={4}>
                       <Box>
                         <img width='250' src={doctor.img} alt="" />
                         <Typography sx={{margin: '5px 0 ',fontSize: '16px' , fontWeight: 'bold'}}> {doctor.name}</Typography>
                         <Typography sx={{fontSize: '14px'}}>
                         <i style={{color: '#26DADA' , fontSize: '16px'}} className="fas fa-phone-alt"></i> {doctor.phone}</Typography>
                       </Box>
                    </Grid>
                  )
                })
              }
            </Grid>
       </Box>
    </Container>
  );
};

export default Doctor;