import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default class GrantGithub extends React.Component {

  findRepos = () => {
    const grant = this.props.grant ;
    const repos = [] ;
    const maxSeparators = 5 ;
    const ignore = ['Grants-Program', 'Grant-Milestone-Delivery'] ;
    function ignoreRepo(x) {
        for (var i in ignore) {
            if (x.includes(ignore[i])) {
                return true ;
            }
        }
        return false ;
    }
    function addToRepos(x) {
        var url = x.url ;
        if (url.includes('github.com') && (!ignoreRepo(url))) {
            var parts = url.split('/') ;
            if (parts.length>maxSeparators) {
                parts = parts.slice(0,maxSeparators) ;
                url = parts.join('/') ;
            }
            if (!repos.includes(url)) {
                repos.push(url) ;
            }
        }
    }
    grant.links.map(addToRepos) ;
    for (var i in grant.milestones) {
        const milestone = grant.milestones[i] ;
        if (milestone.delivery && milestone.delivery.links) {
            milestone.delivery.links.map(addToRepos) ;
        }
        if (milestone.evaluation && milestone.evaluation.links) {
            milestone.evaluation.links.map(addToRepos) ;
        }
    }
    return repos ;
  }

  openUrl = (url) => () => {
    window.open(url, '_blank') ;
  }

  renderItem = (url) => {
    return (
        <ListItem key={url}>
            <ListItemButton onClick={this.openUrl(url)}>
              <ListItemText primary={url} />
            </ListItemButton>
        </ListItem>
    ) ;
  }

  render = () => {
      const repos = this.findRepos() ;
      return (
        <List>
            {repos.map(this.renderItem)}
        </List>
      );
  }

}