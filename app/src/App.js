import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './components/Header' ;
import Main from './components/Main' ;

export default class App extends React.Component {

  render() {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Header />
            <Main />
          </Container>
        </React.Fragment>
      );
    }
}
