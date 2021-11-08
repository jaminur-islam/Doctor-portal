import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRouter = ({children , ...rest}) => {
  const {user , isLoading} = useAuth();
  if(isLoading){
    return <div style={{textAlign: 'center' , marginTop: '200px'}}>
      <CircularProgress />
    </div>
  }
  return (
    <Route 
     {...rest}
     render={({location})=>
       user.email? (children):(
         <Redirect 
           to={{
             pathname: '/login',
             state: {from : location}
           }}
         />
       )
     }
    />
  );
};

export default PrivetRouter;