import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


import GrantDetails from './GrantDetails' ;
import GrantDocuments from './GrantDocuments' ;


export default class GrantPage extends React.Component {



  constructor(props) {
    super(props) ;
    this.state = {
        grant: null
    }
  }

  componentDidMount = () => {
    this.fetchData() ;
  }

  fetchData = () => {
    const self = this ;
    const url = 'http://localhost:8888/grant/'+this.props.fileName;
    fetch(url)
    .then(res => res.json())
    .then(self.updateData)
    .catch(err => {alert(err)});
  }

  updateData = (data) => {
    this.setState({grant:data}) ;
  }




  renderLoading = () => {
    return (
        <Grid item xs={12}>
            <Typography component="div" variant="h5">Loading {this.props.fileName}...</Typography>
        </Grid>
    ) ;
  }

  renderReady = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <GrantDetails grant={this.state.grant} />
            </Grid>
            <Grid item xs={4}>
                <GrantDocuments  grant={this.state.grant} />
            </Grid>
        </Grid>
    );
  }

  render = () => {
      return (
        <Grid container spacing={2}>
            {this.state.grant?this.renderReady():this.renderLoading()}
        </Grid>
      );
  }

}