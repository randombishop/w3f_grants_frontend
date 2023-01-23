import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default class GrantsList extends React.Component {

  render() {
      return (
        <Paper style={{padding:'10px'}}>
            <Typography component="div" variant="h5">Grants</Typography>
            <br/>
        </Paper>
      );
  }

}