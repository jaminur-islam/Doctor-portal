import { Button, Container, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import React from 'react';
import bgimg from '../../../images/appointment-bg.png'

const bg ={
  background: `url(${bgimg}) no-repeat`,
  backgroundColor: 'rgb(71, 104, 104 , .9)',
  backgroundBlendMode:' darken, luminosity'
}


const MyContact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
   <Box style={bg} >
      <Container sx={{textAlign:'center' , mt: 20 ,padding:'30px 0'}}>
       <Typography sx={{fontSize: '16px' , fontWeight: 'bold', color: '#26DADA'}}>
         CONTACT US 
       </Typography>
       <Typography sx={{fontSize: '30px' , fontWeight: 'bold', my: 2}}>
         Always Connect with us 
       </Typography>

       <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex' , flexDirection: 'column' , width: '50%' , margin:'0 auto'}}>
         <input type='email' style={{padding:'15px' , margin: '15px 0 ' , border: 0 , outline: 0 , borderRadius: '5px'}}  {...register("email")} placeholder='Your email address*' />
         <input placeholder='Subject*' style={{padding:'15px' ,border: 0 , margin: '15px 0 ' ,outline: 0 , borderRadius: '5px'}} {...register("subject", { required: true })} />
         <textarea placeholder='Your message*' style={{padding:'40px' , margin: '15px 0 ' ,outline: 0 , borderRadius: '5px'}} {...register("message", { required: true })} />
         
      
      <Button sx={{width: '40%' , margin: '0 auto' ,padding: '5px' , fontSize: '20px'}} variant='contained' type="submit"> Submit </Button>
    </form>
    </Container>
   </Box>
  );
};

export default MyContact;