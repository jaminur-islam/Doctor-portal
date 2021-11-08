import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{padding: '50px 0'}}>
      <Container>
       <Grid container>
            <Grid item md={3}>
              
                <Typography sx={{fontSize: '14px' , mt: 5}}> Emergency Dental Care </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> treatment of Personal Diseases </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Tooth Extraction </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
            </Grid>
            <Grid item md={3}>
                <Typography variant='h5' sx={{fontWeight:'bold' , color: '#0DD3D3'}}> 
                   services
                </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Emergency Dental Care </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> treatment of Personal Diseases </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Tooth Extraction </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
            </Grid>
            <Grid item md={3}>
                <Typography variant='h5' sx={{fontWeight:'bold' , color: '#0DD3D3'}}> 
                   Oral Health
                </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Emergency Dental Care </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> treatment of Personal Diseases </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Tooth Extraction </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
            </Grid>

            <Grid item md={3}>
                <Typography variant='h5' sx={{fontWeight:'bold' , color: '#0DD3D3'}}> 
                 Our Address
                </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Dhaka mirpur  </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> rod 1234</Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> phone: 01343434343 </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Tooth Extraction </Typography>
                <Typography sx={{fontSize: '14px' , mt: 1}}> Check Up </Typography>
            </Grid>
       </Grid>
    </Container>
    </Box>
  );
};

export default Footer;