import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import {formatDate} from '../../utils' ;


export default class GrantsList extends React.Component {



  renderLoading = () => {
    return <Typography component="div" variant="h5">Loading...</Typography>
  }

  renderReady = () => {
    return (
        <React.Fragment>
            <Typography component="div" variant="h5">Grants: {this.props.grants.length}</Typography>
            <br/>
            <TableContainer>
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left"><b>Project</b></TableCell>
                        <TableCell style={{minWidth:'110px'}} align="center"><b>Started On</b></TableCell>
                        <TableCell align="center"><b>Level</b></TableCell>
                        <TableCell align="center"><b>Cost</b></TableCell>
                        <TableCell align="center"><b>Milestones</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.grants.map(this.renderRow)}
                    </TableBody>
                  </Table>
              </TableContainer>
        </React.Fragment>
    ) ;
  }

  renderRow = (grant) => {
    return (
        <TableRow key={grant.fileName} hover={true}>
              <TableCell>
                <a href={'grants/'+grant.fileName}>{grant.projectName}</a><br/>
                <small>{grant.teamName}</small>
              </TableCell>
              <TableCell>{formatDate(grant.status.acceptDate)}</TableCell>
              <TableCell align="center">{grant.level}</TableCell>
              <TableCell align="right">{grant.amount+' '+grant.amountCurrency}</TableCell>
              <TableCell align="center">{grant.numMilestonesDelivered} / {grant.numMilestones}</TableCell>
        </TableRow>
    ) ;
  }

  render() {
      return (
        <Paper style={{padding:'10px'}}>
            {this.props.grants?this.renderReady():this.renderLoading()}
        </Paper>
      );
  }

}