import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import {formatDate} from '../../utils' ;



export default class GrantDetails extends React.Component {

  renderTableRow(label, value) {
    const styleColumn1 = {width:'100px', textAlign:'right'} ;
    const styleColumn2 = {width:'250px', textAlign:'left'} ;
    return (
        <TableRow>
            <TableCell style={styleColumn1}><b>{label}</b></TableCell>
            <TableCell style={styleColumn2}>{value}</TableCell>
        </TableRow>
    ) ;
  }

  render = () => {
      const grant = this.props.grant ;
      return (
        <Paper style={{padding:'20px'}}>
            <Typography variant="h5">
                {grant.projectName}
            </Typography>
            <hr/>
            <Table>
                <TableBody>
                  {this.renderTableRow('Team Name', grant.teamName)}
                  {this.renderTableRow('Date accepted', formatDate(grant.status.acceptDate))}
                  {this.renderTableRow('Level', grant.level)}
                  {this.renderTableRow('Payment Address', grant.paymentAddress)}
                  {this.renderTableRow('Currency',  grant.paymentCurrency)}
                  {this.renderTableRow('Amount',  grant.amount)}
                  {this.renderTableRow('Milestones', grant.numMilestonesDelivered+' / '+grant.numMilestones)}
                </TableBody>
            </Table>
            <hr/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {JSON.stringify(this.props.grant)}
        </Paper>
      );
  }

}