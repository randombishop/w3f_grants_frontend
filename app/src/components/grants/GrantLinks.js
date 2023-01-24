import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default class GrantOverview extends React.Component {

  aggregateLinks = () => {
    const grant = this.props.grant ;
    const d = {} ;
    function addToDictionary(x) {
        d[x.url] = x.title
    }
    grant.links.map(addToDictionary) ;
    for (var i in grant.milestones) {
        const milestone = grant.milestones[i] ;
        if (milestone.delivery && milestone.delivery.links) {
            milestone.delivery.links.map(addToDictionary) ;
        }
        if (milestone.evaluation && milestone.evaluation.links) {
            milestone.evaluation.links.map(addToDictionary) ;
        }
    }
    return Object.entries(d) ;
  }

  renderLink = (link) => {
    const url = link[0];
    var label = link[1] ;
    if (label.length>40) {
        label = label.substring(0,35)+'...' ;
    }
    return (
        <Grid key={url} item xs={6}>
            <Link href={url} target='_blank'>{label}</Link>
        </Grid>
    ) ;
  }

  render = () => {
      const links = this.aggregateLinks() ;
      return (
        <Grid container spacing={2}>
            {links.map(this.renderLink)}
        </Grid>
      );
  }

}