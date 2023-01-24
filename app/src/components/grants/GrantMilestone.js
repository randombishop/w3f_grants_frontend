import React from 'react';
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export default class GrantMilestone extends React.Component {

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

  renderSummary = () => {
    const milestone = this.props.milestone;
    return (
        <Table>
            <TableBody>
              {this.renderTableRow('Milestone cost', '123', 'usdc')}
              {this.renderTableRow('Delivery', '2022-12-12', 'link to md file')}
              {this.renderTableRow('Evaluation', '2022-12-30', 'link to md file')}
            </TableBody>
        </Table>
    ) ;
  }

  renderMarkdown = () => {
    return (
        <ReactMarkdown remarkPlugins={[RemarkGfm]}>
            {this.props.milestone.description}
        </ReactMarkdown>
    ) ;
  }

  render = () => {
      return (
        <React.Fragment>
            {this.renderSummary()}
            {this.renderMarkdown()}
        </React.Fragment>
      );
  }

}