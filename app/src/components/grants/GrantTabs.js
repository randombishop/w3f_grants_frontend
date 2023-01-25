import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


import GrantInfo from './GrantInfo' ;
import GrantOverview from './GrantOverview' ;
import GrantMilestone from './GrantMilestone' ;
import GrantGithub from './GrantGithub' ;
import GrantLinks from './GrantLinks' ;

export default class GrantTabs extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {
        currentTab: 'info'
    }
  }

  handleChange = (event, newValue: string) => {
    this.setState({currentTab:newValue});
  };

  renderMilestoneTabTitle(milestone) {
    const number = milestone.number ;
    const label = 'M'+number ;
    const icon = milestone.delivery?<CheckCircleIcon />:<PendingIcon /> ;
    return <Tab key={label} label={label} icon={icon} value={label} />
  }

  renderMilestoneTabPanel(milestone) {
    const number = milestone.number ;
    const label = 'M'+number ;
    return (<TabPanel key={label} value={label}>
                <GrantMilestone milestone={milestone} />
           </TabPanel>) ;
  }

  render = () => {
      const grant = this.props.grant ;
      return (
         <TabContext value={this.state.currentTab}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={this.handleChange} >
                <Tab label="Info" icon={<InfoIcon />} value="info" />
                <Tab label="Overview" icon={<SummarizeIcon />} value="overview" />
                {grant.milestones?
                grant.milestones.map(this.renderMilestoneTabTitle)
                :''}
                <Tab label="Repos" icon={<GitHubIcon />} value="repos" />
                <Tab label="Links" icon={<LinkIcon />} value="links" />
              </TabList>
            </Box>

            <TabPanel value="info">
                <GrantInfo grant={grant} />
            </TabPanel>

            <TabPanel value="overview">
                <GrantOverview grant={grant} />
            </TabPanel>

            {grant.milestones?
            grant.milestones.map(this.renderMilestoneTabPanel)
            :''}

            <TabPanel value="repos">
                <GrantGithub grant={grant} />
            </TabPanel>

            <TabPanel value="links">
                <GrantLinks grant={grant} />
            </TabPanel>

          </TabContext>
      );
  }

}