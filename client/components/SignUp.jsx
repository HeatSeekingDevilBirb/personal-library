import React, {useState} from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useDispatch } from 'react-redux';


const SignUp = () => {
    //const dispatch = useDispatch()
    
    const paperStyle={padding:20, width:280, height:'70vh', margin:'0'}
    const avatarStyle={backgroundColor: 'green'}
    const headerStyle={margin: 0}
    const checkboxStyle={fontSize: '8px'}

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log("username", username, 'password', password, 'email', email);
        
        
  
  return fetch('api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"username":username, "password":password, "email":email}),
  })
    .then((response) => response.json())
    .then((response) => {
      idFromSQLData = response;
      console.log('response', response);
      //dispatch({ type: types_enum.SIGNUP });
    })
    .catch((err) => {
      console.log('error from signup action', err);
    });
    }
    

    return(
        <Grid align='center'>
            
        <Paper style={paperStyle}>
            <Grid align='center'>
        <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
         <h2 style={headerStyle}>Sign Up</h2>
         <Typography variant='caption' gutterBottom>Fill in this form to create an account</Typography>
         </Grid>
        
         <form onSubmit={handleSubmit}>
           
            <TextField fullWidth label="Email"
            onInput={e=> setEmail(e.target.value)} />
            <TextField fullWidth label="Name"
            onInput={e=> setUsername(e.target.value)} 
             />
            <TextField 
            onInput={e=> setPassword(e.target.value)} 
            fullWidth label="Password" type='password' 
            
            />
            {/* <TextField fullWidth label="Confirm Password" /> */}
            <Grid align="left">
            <FormControlLabel 
                control={
                <Checkbox 
               
                name="terms"
                color="primary"
                  />
                 }
                 
                label="I accept the terms and conditions."
                
                />
            </Grid>
            <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
            
         </form>

         </Paper>
         </Grid>
         
    )
}

export default SignUp;