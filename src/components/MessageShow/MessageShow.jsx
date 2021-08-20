import React, { Component } from 'react'
import { DateTime } from 'luxon'
import styles from './MessageShow.module.css'
import ProfileCard from '../ProfileCard/ProfileCard'

class MessageShow extends Component {
  state = {
    formData:{
      content:''
    }
  }

  handleChange = evt => {
    this.setState({formData: {[evt.target.name]:evt.target.value}})
  }

  handleSubmit = evt => {
    this.props.newMessage(evt, this.state.formData)
    this.setState({
      formData: {
        content: ''
      }
    })
  }
  
  render() { 
    return (
      <div className={styles.box}>
      <div hidden={!this.props.messageShow}>

      <h1 className={styles.header}>  <ProfileCard profile={this.props.profile}/>   </h1>=

      <form onSubmit={this.handleSubmit}>
        <textarea className={styles.nextMessage} name="content" id="content" cols="30" rows="10" onChange={this.handleChange} value={this.state.formData.content}></textarea>
        <button className={styles.sendButton} disabled={this.state.formData.content === ''}>SEND</button> 
      </form>
        
      {this.props.messages?.reverse().map(message=>
      <React.Fragment key={message._id}>
        <h1 className={styles.eachMessage}> 
          <span className={styles.textPerson}>{message.from.firstName + ": "}</span>
          <span className={styles.textMessage}>{message.content}</span>
          </h1> 
        <h3 className={styles.timeSent}>{DateTime.fromISO(message.createdAt).toRelative()}</h3>
      </React.Fragment>
      )}
      </div>
      </div>
    );
  }
}
 
export default MessageShow;