import React, { Component } from 'react'
import * as MessageService from '../../services/message'

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
      {this.state.messages?.map(message=>
       <h3>{message.content}</h3> 
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