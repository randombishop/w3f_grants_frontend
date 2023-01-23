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
    //const self = this ;
    const url = 'http://localhost:8888/grants/'+this.props.fileName;
    alert(url) ;
    //fetch(url)
    //.then(res => res.json())
    //.then(self.updateData)
    //.catch(err => {alert(err)});
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
            </Grid>
        </React.Fragment>
    );
  }

  render = () => {
      return (
        <Grid container spacing={2}>
            {this.props.grant?this.renderReady():this.renderLoading()}
        </Grid>
      );
  }

}