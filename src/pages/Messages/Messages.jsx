import React, { Component } from 'react'
import Messaged from '../../components/Messaged/Messaged';
import MessageShow from '../../components/MessageShow/MessageShow';

class Messages extends Component {
  state = {
    messageShow: false,
  }
  render() { 
    return (
      <>
      <Messaged/>
      {this.state.messageShow &&
      <MessageShow/> 

      }
      {this.props.location.state&&
      <MessageShow profile = {this.props.location.state}/>
      }
      </>
    );
  }
}

export default Messages;