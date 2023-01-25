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
    window.open(url, '_blank') ;
  }

  getApplicationPR = () => {
    const pr = this.props.grant.pullRequest ;
    return 'https://github.com/w3f/Grants-Program/pull/'+pr ;
  }

  getApplicationAccepted = () => {
    const fileName = this.props.grant.fileName ;
    return 'https://github.com/w3f/Grants-Program/tree/master/applications/'+fileName ;
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
                url: 'https://github.com/w3f/Grant-Milestone-Delivery/pull/'+pr
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
            const fileName = milestone.delivery.fileName ;
            ans.push({
                label: fileName,
                url: 'https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/'+fileName
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
            const fileName = milestone.evaluation.fileName ;
            ans.push({
                label: fileName,
                url: 'https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/'+fileName
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
                <ListItemButton key={item.label} sx={{ pl: 4 }} onClick={this.openDocument(item.url)}>
                    <ListItemText primary={item.label} />
                </ListItemButton>
            )
          })}
        </List>
    ) ;
  }

  render = () => {
      const applicationPR = this.getApplicationPR() ;
      const applicationAccepted = this.getApplicationAccepted() ;
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

          <ListItemButton onClick={this.openDocument(applicationPR)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Application PR" />
          </ListItemButton>

          <ListItemButton onClick={this.openDocument(applicationAccepted)}>
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