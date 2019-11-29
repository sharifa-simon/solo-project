import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Menu, MenuItem } from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Nav/Nav';




export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
  return (
      
    <>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
       
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        
        <MenuItem onClick={handleClose}><Nav /></MenuItem>
        
      </Menu>
    </>
  );
}

