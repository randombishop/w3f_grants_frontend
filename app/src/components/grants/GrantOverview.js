import React from 'react';


export default class GrantOverview extends React.Component {

  render = () => {
      const grant = this.props.grant ;
      return (
        <div>
            {grant.abstract}
        </div>
      );
  }

}