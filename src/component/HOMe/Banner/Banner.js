import React from 'react';
import chair from '../../../images/chair.png'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
 
const bgStyle = {
  background: `url(${chair}) no-repeat`,
  backgroundColor: 'rgb(44, 63, 68 , .8)',
  backgroundBlendMode:' darken, luminosity'
}

const Banner = () => {
  return (
   <Box style={bgStyle} sx={{overflow: 'hidden'}}>
        <Container sx={{mt: 10 , height: 500  }}>
          <Grid container spacing={5}>
              <Grid item md={7}> 
                <Typography variant='h4'  sx={{fontSize: '30px' , fontWeight: '800'}}> Your New Smaile Starts Here </Typography>
                <Typography variant='h6' sx={{fontSize: '14px' , my: 3 , color: 'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero illo assumenda repellendus veritatis commodi molestias adipisci perferendis, repellat voluptate.</Typography>
                <Button variant='contained'> GET APPOINTMENT </Button>
              </Grid>
              <Grid item md={5}> 
                 <img width='450' src={chair} alt="" />
              </Grid>
          </Grid>
    </Container>
   </Box>
   
  );
};

export default Banner;