import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import VerifiedIcon from '@mui/icons-material/Verified';
import FactCheckIcon from '@mui/icons-material/FactCheck';


export default class GrantDocuments extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {
        openDeliv1: true,
        openDeliv2: true,
        openEvals: true
    }
  }

  switchItems = (key) => () => {
    const x = this.state[key] ;
    const state = {} ;
    state[key] = !x ;
    this.setState(state) ;
  }

  openDocument = (url) => () => {
    alert(url) ;
  }

  getDeliveries1 = () => {
    const ans = [] ;
    for (var i in this.props.grant.milestones) {
        const milestone = this.props.grant.milestones[i] ;
        if (milestone.delivery && milestone.delivery.githubHistory && milestone.delivery.githubHistory[0]) {
            const commit = milestone.delivery.githubHistory[0]
            const pr = commit.pullRequest ;
            ans.push({
                label: 'PR#'+pr,
                url: '1234'
            }) ;
        }
    }
    return ans ;
  }

  getDeliveries2 = () => {
    const ans = [] ;
    for (var i in this.props.grant.milestones) {
        const milestone = this.props.grant.milestones[i] ;
        if (milestone.delivery) {
            ans.push({
                label: milestone.delivery.fileName,
                url: '1234'
            }) ;
        }
    }
    return ans ;
  }

  getEvaluations = () => {
    const ans = [] ;
    for (var i in this.props.grant.milestones) {
        const milestone = this.props.grant.milestones[i] ;
        if (milestone.evaluation) {
            ans.push({
                label: milestone.evaluation.fileName,
                url: '1234'
            }) ;
        }
    }
    return ans ;
  }

  renderGroup = (items, key, label, icon) => {
    return (
        <React.Fragment>
          <ListItemButton onClick={this.switchItems(key)}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
            {this.state[key] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state[key]} timeout="auto" unmountOnExit>
            {this.renderSubMenu(items)}
          </Collapse>
        </React.Fragment>
    )
  }

  renderSubMenu = (items) => {
    return (
        <List component="div" disablePadding>
          {items.map((item) => {
            return (
                <ListItemButton sx={{ pl: 4 }} onClick={this.openDocument(item.url)}>
                    <ListItemText primary={item.label} />
                </ListItemButton>
            )
          })}
        </List>
    ) ;
  }

  render = () => {
      const deliveries1 = this.getDeliveries1() ;
      const deliveries2 = this.getDeliveries2() ;
      const evaluations = this.getEvaluations() ;
      return (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          subheader={
            <ListSubheader component="div">
              Documents
            </ListSubheader>
          }
        >

          <ListItemButton onClick={this.openDocument('application_pr')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Application PR" />
          </ListItemButton>

          <ListItemButton onClick={this.openDocument('application_accepted')}>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Application Accepted" />
          </ListItemButton>

          {deliveries1.length>0?
          this.renderGroup(deliveries1,
                            'openDeliv1',
                            'Deliveries PR',
                            <SendTimeExtensionIcon />)
          :''}

          {deliveries2.length>0?
          this.renderGroup(deliveries2,
                            'openDeliv2',
                            'Deliveries Accepted',
                            <VerifiedIcon />)
          :''}

          {evaluations.length>0?
          this.renderGroup(evaluations,
                            'openEvals',
                            'Evaluations',
                            <FactCheckIcon />)
          :''}

        </List>
      );
  }

}