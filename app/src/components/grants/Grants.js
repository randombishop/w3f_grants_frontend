import React from 'react';
import Grid from '@mui/material/Grid';


import GrantsFilters from './GrantsFilters' ;
import GrantsList from './GrantsList' ;



export default class Grants extends React.Component {

  render() {
      return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
              <GrantsFilters />
            </Grid>
            <Grid item xs={8}>
              <GrantsList />
            </Grid>
        </Grid>
      );
  }

}