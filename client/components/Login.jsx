import React, {useState} from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import {useDispatch} from 'react-redux'
import { useCallback } from 'react';
import * as types_enum from '../constants/actionTypes'



const Login = ({handleChange}) => {

    const dispatch = useDispatch()
       
    const paperStyle={padding:20, width:280, height:'70vh', margin:'0'}
    const fieldStyle={margin: '8px 0'}

    const avatarStyle={backgroundColor: 'green'}
    const buttonStyle={margin: "8px 0"}

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log("username", username, 'password', password);
        let loginId;
    let formData = {username, password};
    console.log('formData', formData);
   fetch('api/login', {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({"username":username, 'password':password}),
  })
    .then((response) => response.json())
    .then((response) => {
      loginId = response[0].id
      console.log('response', response[0].id);
      dispatch({ type: types_enum.LOGIN, payload: loginId });
    })
    .catch((err) => {
      console.log('error from login action', err);
    });
    
};
    return (
        <Grid align='center'>
            
            <Paper style={paperStyle}>
                <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2>Sign In</h2>
             </Grid>
             <form onSubmit={handleSubmit}>
             <TextField
             value={username} 
             onInput={e=>setUsername(e.target.value)}
             id="outlined-basic" 
             label="Username" 
             variant="outlined" 
             placeholder='Enter username' 
             style={fieldStyle} 
             fullWidth required />

             <TextField 
             value={password} 
             onInput={e=>setPassword(e.target.value)}
             id="outlined-basic" 
             label="Password" 
             variant="outlined" 
             placeholder='Enter password' 
             style={fieldStyle} 
             type='password' 
             fullWidth required />
             <FormControlLabel onSubmit
                control={
                <Checkbox
               
                name="checkedB"
                color="primary"
                  />
                 }
                label="Remember me"
                />
               
                <Button type='submit' color='primary' fullWidth variant='contained' style={buttonStyle}>
                    Sign In
                                       
                </Button>
                
                
                </form>
                <Typography>
                    <Link to='/signinup'>Forgot password ?</Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link to='/signinup' onClick={()=>handleChange("event", 1)}>Sign In</Link>
                </Typography>
                

            </Paper>
        </Grid>
    )
} 

export default Login