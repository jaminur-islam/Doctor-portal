import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/people-1.png'
import img2 from '../../../images/people-2.png'
import img3 from '../../../images/people-3.png'

const testMonial = [
  {name: 'Winson Herry ' , description: 'it is long established fact that by the readable content of a lot layout  The point of using lorem a more-or-less normal distribute to using Content here, content ' , village:'California' , img: `${img1}`},

  {name: 'Winson Herri ' , description: 'it is long established fact that by the readable content of a lot layout  The point of using lorem a more-or-less normal distribute to using Content here, content ' , village:'California' , img: `${img2}`},

  {name: 'Tommas Herry ' , description: 'it is long established fact that by the readable content of a lot layout The point of using lorem a more-or-less normal distribute to using Content here, content ' , village:'California' , img: `${img3}`},
]

const Testimonial = () => {
  return (
   <Container sx={{my:5}}>
     <Typography sx={{fontSize: '20px' ,mb: 2  , color: '#07D6C8'}}>
       TESTIMONIAL
       </Typography>
     <Typography variant='h4' sx={{fontWeight: 'bold' , mb:8}}>
       What's Our Patients Says
       </Typography>
      <Box>
         <Grid container spacing={5} >
            {
              testMonial.map(monal=> {
                return(
                  <Grid key={monal.name} item md={4}>
                     <Box sx={{boxShadow: '2px 2px 4px #7EB5B1', padding: '30px'}}>
                     <Typography sx={{fontSize: '15px' , lineHeight:'30px' , width:'80%' }}> 
                       {monal.description}
                     </Typography>
                     <Box sx={{display: 'flex' ,mt: 2}}>
                        <Box> 
                          <img width='55' src={monal.img} alt="" />
                        </Box>
                        <Box sx={{textAlign: 'left' , ml: 2}} >
                          <Typography sx={{fontSize: 18 , color: '#07D6C8'}}>
                            {monal.name}
                          </Typography>
                          <Typography sx={{fontSize: '15px'}}>
                            {monal.village}
                          </Typography>
                        </Box>
                     </Box>
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

export default Testimonial;