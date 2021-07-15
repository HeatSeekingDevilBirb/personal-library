
import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, Box } from '@material-ui/core';
import Login from '../components/Login';
import SignUp from '../components/SignUp';



const SignInUpContainer = () => {
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

const paperStyle={width: 320, margin: "20px auto"}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }


    return (
        <div>Container
            <Paper elevation={20} style={paperStyle}>
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label="Sign In" />
    
    <Tab label="Sign Up" />
  </Tabs>
  <TabPanel value={value} index={0}>
      <Login/></TabPanel>
  <TabPanel value={value} index={1}><SignUp/></TabPanel>
</Paper>



        </div>
    )
}


export default SignInUpContainer