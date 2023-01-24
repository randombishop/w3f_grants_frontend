import React from 'react';
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'


export default class GrantOverview extends React.Component {

  renderLastLine = () => {
    const fileName = this.props.grant.fileName ;
    const url = 'https://github.com/w3f/Grants-Program/tree/master/applications/'+fileName ;
    var ans = '\n\n...\n\n' ;
    ans += '[Open the file on github]' ;
    ans += '(' ;
    ans += url ;
    ans += ')' ;
    return ans ;
  }

  render = () => {
      const grant = this.props.grant ;
      return (
        <ReactMarkdown remarkPlugins={[RemarkGfm]}>
            {grant.abstract + this.renderLastLine()}
        </ReactMarkdown>
      );
  }

}