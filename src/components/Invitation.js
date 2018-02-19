import React from 'react';

class Invitation extends React.Component{
  render(){
    return(
      <div className="invitation">
        <h1>You've been invited!</h1>
        <div className="invitation-body">{this.props.children}</div>
      </div>
    )
  }
}

export default Invitation
