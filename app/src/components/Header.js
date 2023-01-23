import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import Logo from '../assets/logo.png' ;

export default class Header extends React.Component {

  render() {
      return (
        <AppBar position="static">
            <Toolbar>
              <img src={Logo} width="45" height="45" style={{marginRight:'20px'}} alt="W3F Logo"/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                W3F Grants Data
              </Typography>
              <Button color="inherit">Grants</Button>
              <Button color="inherit">Teams</Button>
              <Button color="inherit">Applications</Button>
              <Button color="inherit">Deliveries</Button>
              <Button color="inherit">Stats</Button>
              <Button color="inherit">Links</Button>
            </Toolbar>
        </AppBar>
      );
    }
}