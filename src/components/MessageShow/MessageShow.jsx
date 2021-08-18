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
        <h1>{'Messaging: ' + this.props.otherProfile ?.firstName}</h1>
        {this.props.messages?.map(message=>
      <>
        <h1>{message.from.firstName + ": "}{message.content}</h1> 
        <h2>{DateTime.fromISO(message.createdAt).toRelative()}</h2>
      </>
      )}
      <form onSubmit={(evt) => this.props.newMessage(evt, this.state.formData)}>
      <textarea name="content" id="content" cols="30" rows="10" onChange={this.handleChange}>{this.state.formData.content}</textarea>
      <button>send</button>  
      </form>
      </div>
    );
  }
}
 
export default MessageShow;