import React from 'react';
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'


export default class GrantMilestone extends React.Component {

  render = () => {
      const milestone = this.props.milestone ;
      return (
        <ReactMarkdown remarkPlugins={[RemarkGfm]}>
            {milestone.description}
        </ReactMarkdown>
      );
  }

}