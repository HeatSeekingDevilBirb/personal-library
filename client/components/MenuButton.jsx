import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


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


export default function SimpleMenu () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


return (
    <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {<IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
      <MenuIcon />
    </IconButton>}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Category 1</MenuItem>
            <MenuItem onClick={handleClose}>Category 2</MenuItem>
            <MenuItem onClick={handleClose}>Category 3</MenuItem>
            <MenuItem onClick={handleClose}>Category 4</MenuItem>
            <MenuItem onClick={handleClose}>Category 5</MenuItem>

        </Menu>


    </div>
)
}