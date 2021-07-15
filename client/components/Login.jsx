import React from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const Login = ({handleChange}) => {
    
    const paperStyle={padding:20, width:280, height:'70vh', margin:'0'}
    const fieldStyle={margin: '8px 0'}

    const avatarStyle={backgroundColor: 'green'}
    const buttonStyle={margin: "8px 0"}



    return (
        <Grid align='center'>
            
            <Paper style={paperStyle}>
                <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2>Sign In</h2>
             </Grid>
             <TextField id="outlined-basic" label="Username" variant="outlined" placeholder='Enter username' style={fieldStyle} fullWidth required />
             <TextField id="outlined-basic" label="Password" variant="outlined" placeholder='Enter password' style={fieldStyle} type='password' fullWidth required />
             <FormControlLabel
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