import React, { Component } from 'react'
import Messaged from '../../components/Messaged/Messaged';
import MessageShow from '../../components/MessageShow/MessageShow';
import * as messageService from '../../services/message'

class Messages extends Component {
  state = {
    messageShow: false,
    profile: this.props.location.state,
    wasThereLocation: false,
    messages: [],
    messaged: [],
  }
  handleMessageShow = async (profile) => {
    this.setState({
      profile: profile,
    })
    const messages = await messageService.getMessages(profile._id)
    this.setState({messages})
    if(!this.props.location.state && !this.state.messageShow) {
      this.setState({
        messageShow: true,
      })
    } 
  }

  newMessage = (evt, formData) => {
    evt.preventDefault()
    messageService.newMessage(this.state.profile._id, formData)
    .then(() => {
      messageService.getMessages(this.state.profile._id)
      .then(messages => {
        this.setState({messages})
        messageService.getMessaged()
        .then(messaged => {
          this.setState({ messaged })
        })
      })
    })
  }

  async componentDidMount() {
    const messaged = await messageService.getMessaged()
    this.setState({messaged: messaged})
    if(this.props.location.state) {
      this.setState({
        wasThereLocation: true,
        messageShow: true,
        profile: this.props.location.state,
      })
      const messages = await messageService.getMessages(this.props.location._id)
      this.setState({messages})
    } else {
      
    }
  }
  render() { 
    return (
      <>
      {
        !this.props.location.state ? 
        <>
        <Messaged messaged={this.state.messaged} handleMessageShow={this.handleMessageShow} />
        <MessageShow newMessage={this.newMessage} messageShow={this.state.messageShow} profile={this.state.profile} userProfile={this.props?.userProfile} messages={this.state.messages}/>
        </>
        :
        <>
          <Messaged handleMessageShow={this.handleMessageShow} messaged={this.state.messaged} /> 
          <MessageShow newMessage={this.newMessage} messages={this.state.messages} wasThereLocation={this.state.wasThereLocation} messageShow={this.state.messageShow} profile={this.props.profile} userProfile={this.props?.userProfile}/>
        </>
      }
      </>
    );
  }
}

export default Messages;