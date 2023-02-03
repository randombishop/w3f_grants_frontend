import React from 'react';
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import Link from '@mui/material/Link';


export default class GrantOverview extends React.Component {

  renderMarkdown = () => {
    return (
        <ReactMarkdown remarkPlugins={[RemarkGfm]}>
           {this.props.grant.abstract + '\n\n...\n\n'}
        </ReactMarkdown>
    );
  }

  renderLinkToFile = () => {
    const fileName = this.props.grant.fileName ;
    const url = 'https://github.com/w3f/Grants-Program/tree/master/applications/'+fileName ;
    return <Link href={url} target='_blank'>Open file on github</Link> ;
  }

  render = () => {
      return (
        <React.Fragment>
            {this.renderMarkdown()}
            {this.renderLinkToFile()}
        </React.Fragment>
      );
  }

}