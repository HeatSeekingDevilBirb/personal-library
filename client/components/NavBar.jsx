import React, {useState} from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import App from './App';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import MenuButton from './MenuButton'




const useStyles = makeStyles(theme => ({
  menuButton: {
    color: "#fafafa",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fafafa"
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);



  return (
    <>
    <Appbar position="static">
       <Toolbar>
    <MenuButton/>
    <Typography variant="h6" className={classes.title}>
      <Link to='/' className={classes.title}>
        All Bookmarks</Link></Typography>
    <Typography variant='h6' className={classes.title}>
    <Link to='/signinup' className={classes.title}>Category 1</Link></Typography>
    {/* <Typography variant='h6' className={classes.title}>Category 2</Typography>
    <Typography variant='h6' className={classes.title}>Category 3</Typography>
    <Typography variant='h6' className={classes.title}>Category 4</Typography> */}
    <Button color="inherit">
      <Link className={classes.menuButton} to='/signinup'>
      Sign In /
      Sign Up</Link>
      </Button>
  </Toolbar>
    </Appbar>
    </>
  );
};

export default Navbar;
