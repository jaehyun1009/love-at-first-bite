import React, { Component } from 'react'
import * as MessageService from '../../services/message'
import { DateTime } from 'luxon'
import styles from './MessageShow.module.css'


class MessageShow extends Component {
  state = {
    formData:{
      content:''
    }
  }

  handleChange = evt => {
    this.setState({formData: {[evt.target.name]:evt.target.value}})
  }
  
  render() { 
    return (
      <div hidden={!this.props.messageShow}>
        <h1>{'You: ' + this.props.userProfile?.firstName}</h1>
        <h1>{'Messaging: ' + this.state.otherProfile?.firstName}</h1>
        {this.state.messages?.map(message=>
          <React.Fragment key={message._id}>
            <h1>{message.from.firstName + ": "}{message.content}</h1> 
            <h2>{DateTime.fromISO(message.createdAt).toRelative()}</h2>
          </React.Fragment>
        )}
      <form onSubmit={this.handleSubmit}>
      <textarea name="content" id="content" cols="30" rows="10" onChange={this.handleChange}>{this.state.content}</textarea>
      <button>send</button>  
      </form>
      </div>
    );
  }
}
 
export default MessageShow;