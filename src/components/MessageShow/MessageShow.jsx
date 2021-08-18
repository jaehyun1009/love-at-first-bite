import React, { Component } from 'react'
import * as MessageService from '../../services/message'
import { DateTime } from 'luxon'
import styles from './MessageShow.module.css'


class MessageShow extends Component {
  state = {
    messages:[],
    otherProfile:this.props.profile,
    formData:{
      content:''
    }
  }
  async componentDidMount(){
    const messages = await MessageService.getMessages(this.state.otherProfile._id)
    this.setState({messages})
  }
  handleChange= evt => {
    this.setState({formData: {[evt.target.name]:evt.target.value}})
  }
  handleSubmit= evt => {
    evt.preventDefault()
    MessageService.newMessage(this.state.otherProfile._id,this.state.formData)
    .then(message=> {
      console.log(message)
    })
  }
  render() { 
    return (
      <>
      <h1>{'You: ' + this.props.userProfile?.firstName}</h1>
      <h1>{'Messaging: ' + this.state.otherProfile.firstName}</h1>
      {this.state.messages?.map(message=>
      <>
       <h1>{message.from.firstName + ": "}{message.content}</h1> 
       <h2>{DateTime.fromISO(message.createdAt).toRelative()}</h2>
      </>
      )}
      <form onSubmit={this.handleSubmit}>
      <textarea name="content" id="content" cols="30" rows="10" onChange={this.handleChange}>{this.state.content}</textarea>
      <button>send</button>  
      </form>
      </>
    );
  }
}
 
export default MessageShow;