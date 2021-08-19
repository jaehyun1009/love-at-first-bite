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
      
      
      <div className={styles.box}>
      <div hidden={!this.props.messageShow}>
      <h1 className={styles.header}>{this.props.profile?.firstName}</h1>
      <form onSubmit={(evt) => this.props.newMessage(evt, this.state.formData)}>
      <textarea className={styles.nextMessage} name="content" id="content" cols="30" rows="10" onChange={this.handleChange}>{this.state.formData.content}</textarea>
      <button className={styles.sendButton} >SEND</button> 
      </form>
        
        {this.props.messages?.reverse().map(message=>
      <>
        <h1 className={styles.eachMessage}> 
          <span className={styles.textPerson}>{message.from.firstName + ": "}</span>
          <span className={styles.textMessage} >{message.content}</span>
          </h1> 
        <h3 className={styles.timeSent}>{DateTime.fromISO(message.createdAt).toRelative()}</h3>
      </> 
      )}
      </div>
      </div>
    );
  }
}
 
export default MessageShow;