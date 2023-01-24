import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default class GrantTabs extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {
        currentTab: 'abstract'
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
                <Tab label="Intro" value="intro" />
                <Tab label="M1" value="m1" />
                <Tab label="M2" value="m2" />
              </TabList>
            </Box>
            <TabPanel value="intro">abstract</TabPanel>
            <TabPanel value="m1">Milestone 1</TabPanel>
            <TabPanel value="m2">Milestone 2</TabPanel>
          </TabContext>
      );
  }

}