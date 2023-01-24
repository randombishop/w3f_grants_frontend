import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default class GrantDetails extends React.Component {

  renderTableRow(label, value) {
    const styleColumn1 = {width:'100px', textAlign:'right'} ;
    const styleColumn2 = {width:'250px', textAlign:'left'} ;
    return (
        <TableRow>
            <TableCell style={styleColumn1}><b>{label}</b></TableCell>
            <TableCell style={styleColumn2}><b>{value}</b></TableCell>
        </TableRow>
    ) ;
  }

  render = () => {

      return (
        <Paper style={{padding:'20px'}}>
            <Typography variant="h5">
                {this.props.grant.projectName}
            </Typography>
            <hr/>
            <Table>
                <TableBody>
                  {this.renderTableRow('Team Name', this.props.grant.teamName)}
                  {this.renderTableRow('Date accepted', '')}
                  {this.renderTableRow('Level', '')}
                  {this.renderTableRow('Payment Address', '')}
                  {this.renderTableRow('Currency', '')}
                  {this.renderTableRow('Amount', '')}
                  {this.renderTableRow('Milestones', '')}
                </TableBody>
            </Table>
            <hr/>
            {JSON.stringify(this.props.grant)}
        </Paper>
      );
  }

}