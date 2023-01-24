import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import {formatDate} from '../../utils' ;



export default class GrantInfo extends React.Component {

  renderTableRow(label, value) {
    const styleColumn1 = {width:'100px', textAlign:'right'} ;
    const styleColumn2 = {width:'250px', textAlign:'left'} ;
    return (
        <TableRow key={label}>
            <TableCell style={styleColumn1}><b>{label}</b></TableCell>
            <TableCell style={styleColumn2}>{value}</TableCell>
        </TableRow>
    ) ;
  }

  render = () => {
      const grant = this.props.grant ;
      return (
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
      );
  }

}