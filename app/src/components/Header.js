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
              <Button color="inherit" href="/">
                <img src={Logo} width="45" height="45" style={{marginRight:'20px'}} alt="W3F Logo"/>
              </Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                W3F Grants Data
              </Typography>
              <Button color="inherit" href="/grants">Grants</Button>
              <Button color="inherit" href="/teams">Teams</Button>
              <Button color="inherit" href="/applications">Applications</Button>
              <Button color="inherit" href="/deliveries">Deliveries</Button>
              <Button color="inherit" href="/stats">Stats</Button>
              <Button color="inherit" href="/links">Links</Button>
            </Toolbar>
        </AppBar>
      );
    }
}