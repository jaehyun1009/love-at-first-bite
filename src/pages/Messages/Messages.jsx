import React, { Component } from 'react'
import Messaged from '../../components/Messaged/Messaged';
import MessageShow from '../../components/MessageShow/MessageShow';

class Messages extends Component {
  state = {
    messageShow: false,
  }
  handleMessageShow = (profile) => {
    
  }
  render() { 
    return (
      <>
      {this.state.messageShow &&
      <MessageShow profile=''/> 

      }
      {this.props.location.state&&
      <MessageShow profile={this.props.location.state} userProfile={this.props?.userProfile}/>
      }
      </>
    );
  }
}

export default Messages;