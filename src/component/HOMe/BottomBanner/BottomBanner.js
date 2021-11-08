import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BottomBanner = () => {
  return (
    <Container sx={{marginTop: '-80px'}}>
       <Grid container spacing={3} sx={{color: 'white'}}> 
          <Grid item md={4} >
              <Box sx={{display: 'flex' , justifyContent:'center' , alignItems: 'center' , bgcolor: '#14B1A3' , borderRadius: '5px' , padding: '20px 15px'}}>
                 <Box sx={{fontSize: '60px' , color: 'white' , marginRight: '20px'}}> <i className="far fa-clock"></i></Box> 
                 <Box>
                    <Typography variant='h6' sx={{fontSize: '24', my: 1}}> Opening Hours</Typography>
                    <Typography > Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</Typography>
                 </Box> 
              </Box>
          </Grid>

          <Grid item md={4}>
          <Box sx={{display: 'flex' , justifyContent:'center' , alignItems: 'center' , bgcolor: '#0E171A' , borderRadius: '5px' , padding: '20px 15px'}}>
                 <Box sx={{fontSize: '60px' , color: 'white' , marginRight: '20px'}}> <i className="fas fa-map-marker-alt"></i></Box> 
                 <Box>
                    <Typography variant='h6' sx={{fontSize: '24'  , my: 1}}> Visit our location</Typography>
                    <Typography > Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</Typography>
                 </Box> 
              </Box>
          </Grid>
          <Grid item md={4}>
          <Box sx={{display: 'flex' , justifyContent:'center' , alignItems: 'center' , bgcolor: '#14B1A3' , borderRadius: '5px' , padding: '20px 15px'}}>
                 <Box sx={{fontSize: '60px' , color: 'white' , marginRight: '20px'}}><i className="fas fa-phone-volume"></i></Box> 
                 <Box>
                    <Typography variant='h6' sx={{fontSize: '24' , my: 1}}> Contact us now</Typography>
                    <Typography > Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</Typography>
                 </Box> 
              </Box>
          </Grid>
       </Grid>
    </Container>
  );
};

export default BottomBanner;