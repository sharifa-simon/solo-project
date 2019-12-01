import React from 'react';
import { Menu, MenuItem, makeStyles } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Nav/Nav';
import Nav1 from '../Nav/Nav1';
import Nav2 from '../Nav/Nav2';
import Nav3 from '../Nav/Nav3';



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
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Nav /></MenuItem>
                <MenuItem onClick={handleClose}><Nav1 /></MenuItem>
                <MenuItem onClick={handleClose}><Nav2 /></MenuItem>
                <MenuItem onClick={handleClose}><Nav3 /></MenuItem>
            </Menu>
        </>
    );
}

