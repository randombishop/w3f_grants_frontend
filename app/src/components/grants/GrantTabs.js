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


import GrantInfo from './GrantInfo' ;
import GrantOverview from './GrantOverview' ;


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

  render = () => {
      //const grant = this.props.grant ;
      return (
         <TabContext value={this.state.currentTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={this.handleChange} >
                <Tab label="Info" icon={<InfoIcon />} value="info" />
                <Tab label="Overview" icon={<SummarizeIcon />} value="overview" />
                <Tab label="M1" icon={<CheckCircleIcon />} value="m1" />
                <Tab label="M2" icon={<PendingIcon />} value="m2" />
                <Tab label="Repos" icon={<GitHubIcon />} value="repos" />
              </TabList>
            </Box>
            <TabPanel value="info">
                <GrantInfo grant={this.props.grant} />
            </TabPanel>
            <TabPanel value="overview">
                <GrantOverview grant={this.props.grant} />
            </TabPanel>
            <TabPanel value="m1">Milestone 1</TabPanel>
            <TabPanel value="m2">Milestone 2</TabPanel>
            <TabPanel value="repos">Repositories</TabPanel>
          </TabContext>
      );
  }

}