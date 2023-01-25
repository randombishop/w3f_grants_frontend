import React from 'react';
import Grid from '@mui/material/Grid';


import GrantsFilters from './GrantsFilters' ;
import GrantsList from './GrantsList' ;



export default class Grants extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {
        grantsAll: null,
        grantsFiltered: null
    }
  }

  componentDidMount = () => {
    this.fetchData() ;
  }

  fetchData = () => {
    const self = this ;
    const url = 'http://localhost:8888/grants';
    fetch(url)
    .then(res => res.json())
    .then(self.updateData)
    .catch(err => {alert(err)});
  }

  updateData = (data) => {
    const sorted = data.sort((a, b) => b.status.acceptDate-a.status.acceptDate);
    this.setState({grantsAll:sorted, grantsFiltered:sorted}) ;
  }

  render = () => {
      return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
              <GrantsFilters />
            </Grid>
            <Grid item xs={9}>
              <GrantsList grants={this.state.grantsFiltered} />
            </Grid>
        </Grid>
      );
  }

}