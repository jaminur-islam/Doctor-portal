import { Container, Grid, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import React from 'react';
import img1 from '../../../images/people-1.png'
import img2 from '../../../images/people-2.png'

const Blog = () => {
  return (
   <Container sx={{my: 20}}>
     <Box sx={{textAlign: 'center'}}>
       <Typography sx={{fontSize: '20px' , color: '#07D6C8'}} >OUR BLOG</Typography>
       <Typography sx={{fontWeight: 'bold' , my: 4}} variant='h4' >From Our Blog News </Typography>
     </Box>
      
      <Grid container spacing={5} >

      <Grid item md={4} sx={{mt: 5 ,}}>
              <Box sx={{boxShadow: '2px 3px 4px #D0E9E9', padding: '20px' ,height: '200px' ,bgcolor:'#08C1C1' , color: 'white'}}>
              <Box sx={{display: 'flex' , alignItems: 'center', }}>
                 
                 <Box>
                    <Typography sx={{fontSize:'16px' , fontWeight:'bold'}}>
                       Rashed kobir 
                    </Typography>
                    <Typography sx={{fontSize:'12px', marginTop: '5px' , color: '#7EB5B1'}}>
                       24 april 2021
                    </Typography>
                 </Box>
               </Box>
               <Typography sx={{fontSize: '18px', my: 2 , fontWeight: 'bold'}}> Check at least a doctor in a year for your teeth </Typography>
               <i style={{fontSize: '50px' , fontWeight: '600'}} className="fas fa-long-arrow-alt-right"></i>
              </Box>
           </Grid>

           <Grid item md={4} sx={{mt: 5}}>
              <Box sx={{boxShadow: '2px 3px 4px #D0E9E9', padding: '20px' , height: '200px'}}>
              <Box sx={{display: 'flex' , alignItems: 'center', }}>
                 <Box>
                   <img  width='60' src={img1} alt="" />
                 </Box>
                 <Box sx={{marginLeft: '20px'}}>
                    <Typography sx={{fontSize:'16px' , fontWeight:'bold'}}>
                       Dr. Coudi
                    </Typography>
                    <Typography sx={{fontSize:'12px', marginTop: '5px' , color: '#7EB5B1'}}>
                       23 april 2021
                    </Typography>
                 </Box>
               </Box>
               <Typography sx={{fontSize: '18px', my: 2 , fontWeight: 'bold'}}> 2 times of brush in a day can keep you healthy</Typography>
               <Typography sx={{fontSize: '15px' , color: '#656F6F'}}> it is long established fact that by the readable content of a lot layout. The point </Typography>
              </Box>
           </Grid>

           <Grid item md={4} sx={{mt: 5 ,}}>
              <Box sx={{boxShadow: '2px 3px 4px #D0E9E9', padding: '20px' ,height: '200px'}}>
              <Box sx={{display: 'flex' , alignItems: 'center', }}>
                 <Box>
                   <img  width='60' src={img2} alt="" />
                 </Box>
                 <Box sx={{marginLeft: '20px'}}>
                    <Typography sx={{fontSize:'16px' , fontWeight:'bold'}}>
                       Dr. John Mitchela
                    </Typography>
                    <Typography sx={{fontSize:'12px', marginTop: '5px' , color: '#7EB5B1'}}>
                       24 april 2021
                    </Typography>
                 </Box>
               </Box>
               <Typography sx={{fontSize: '18px', my: 2 , fontWeight: 'bold'}}> The tooth cancer is taking a challenge</Typography>
               <Typography sx={{fontSize: '15px' , color: '#656F6F'}}> it is long established fact that by the readable content of a lot layout. The point </Typography>
              </Box>
           </Grid>
      </Grid>

   </Container>
  );
};

export default Blog;