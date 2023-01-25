import React from 'react';
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SellIcon from '@mui/icons-material/Sell';
import Link from '@mui/material/Link';


import {formatDate} from '../../utils' ;


export default class GrantMilestone extends React.Component {

  renderTableRow(col1, col2, col3, col4) {
    const styleColumn1 = {width:'180px', textAlign:'right', fontWeight:'bold'} ;
    const styleColumn2 = {width:'80px', textAlign:'center'} ;
    const styleColumn3 = {textAlign:'left'} ;
    const styleColumn4 = {width:'120px', textAlign:'center'} ;
    return (
        <TableRow key={col1}>
            <TableCell style={styleColumn1}>{col1}</TableCell>
            <TableCell style={styleColumn2}>{col2}</TableCell>
            <TableCell style={styleColumn3}>{col3}</TableCell>
            <TableCell style={styleColumn4}>{col4}</TableCell>
        </TableRow>
    ) ;
  }

  renderDeliveryRow = () => {
    const milestone = this.props.milestone ;
    const label = 'Delivery' ;
    var date = null ;
    var link = null ;
    var icon = <PendingIcon />
    if (milestone.delivery) {
        date = formatDate(milestone.delivery.mergeDate) ;
        icon = <span><CheckCircleIcon /></span>
        const url = 'https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/'+milestone.delivery.fileName ;
        link = <Link href={url} target='_blank'>github</Link>
    }
    return this.renderTableRow(label, icon, date, link) ;
  }

  renderEvaluationRow = () => {
    const milestone = this.props.milestone ;
    const label = 'Evaluation' ;
    var date = null ;
    var link = null ;
    var icon = <PendingIcon />
    if (milestone.evaluation) {
        date = formatDate(milestone.evaluation.mergeDate) ;
        icon = <span><CheckCircleIcon /></span>
        const url = 'https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/'+milestone.evaluation.fileName ;
        link = <Link href={url} target='_blank'>github</Link>
    }
    return this.renderTableRow(label, icon, date, link) ;
  }

  renderSummary = () => {
    const milestone = this.props.milestone;
    return (
        <Table>
            <TableBody>
              {this.renderTableRow('Milestone cost', <SellIcon />, milestone.cost, '')}
              {this.renderDeliveryRow()}
              {this.renderEvaluationRow()}
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