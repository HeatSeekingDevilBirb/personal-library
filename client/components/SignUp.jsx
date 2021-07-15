import React from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const SignUp = () => {
    const paperStyle={padding:20, width:280, height:'70vh', margin:'0'}
    const avatarStyle={backgroundColor: 'green'}
    const headerStyle={margin: 0}
    const checkboxStyle={fontSize: '8px'}
    return(
        <Grid align='center'>
            
        <Paper style={paperStyle}>
            <Grid align='center'>
        <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
         <h2 style={headerStyle}>Sign Up</h2>
         <Typography variant='caption' gutterBottom>Fill in this form to create an account</Typography>
         </Grid>
        
         <form>
           
            <TextField fullWidth label="Email" />
            <TextField fullWidth label="Name" />
            <TextField fullWidth label="Password" />
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