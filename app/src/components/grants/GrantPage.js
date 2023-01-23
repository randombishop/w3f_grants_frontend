import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


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
        <React.Fragment>
            <Grid item xs={12}>
                <Typography component="div" variant="h5">Grant Details</Typography>
                {JSON.stringify(this.state.grant)}
            </Grid>
        </React.Fragment>
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