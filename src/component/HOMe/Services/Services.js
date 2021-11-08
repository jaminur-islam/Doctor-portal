import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import cavity from '../../../../src/images/cavity.png'
import fluoride from '../../../../src/images/fluoride.png'
import whitening from '../../../../src/images/whitening.png'
import Service from '../Service/Service';

const services = [
  {name: 'flouride Treatment'  , img: cavity , description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum maiores ipsum, inventore mollitia asperiores corporis dignissimos dolor perferendis odit.'},

  {name: 'Teeth Whiting'  , img:fluoride , description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum maiores ipsum, inventore mollitia asperiores corporis dignissimos dolor perferendis odit.'},

  {name: 'Canvity filling'  , img: whitening , description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum maiores ipsum, inventore mollitia asperiores corporis dignissimos dolor perferendis odit.'}
]

const Services = () => {
  return (
    <Container sx={{my: 15}}>
      <Typography sx={{ textAlign: 'center',fontSize: '14px' , color: '#26F6E7' , fontWeight: 'bold'}}> OUR SERVICE </Typography>

      <Typography variant='h5' sx={{ textAlign: 'center' , my: 3, mb: 6}}> SERVICES WE PROVIDE </Typography>
       <Grid container spacing={10}>
          {
            services.map(service=> <Service 
              key={service.name}
              service={service}
               ></Service>)
          }
       </Grid>
    </Container>
  );
};

export default Services;