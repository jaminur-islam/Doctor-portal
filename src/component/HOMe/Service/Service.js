import { Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({service}) => {
  const {name ,  description , img} = service
  return (
    <Grid item md={4} sx={{textAlign: 'center'}}>
          <img width='60' src={img} alt="" />
          <Typography variant='h5' sx={{my: 1 , color: '#99B4B2'}}> 
            {name}
          </Typography>
          <Typography variant='h6' sx={{fontSize: '15px'}}> 
            {description}
          </Typography>
    </Grid>
  );
};

export default Service;