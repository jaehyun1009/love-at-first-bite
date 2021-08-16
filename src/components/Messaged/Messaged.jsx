import React, { Component } from 'react'
import * as messageService from '../../services/message'


class Messaged extends Component {
  state = { 
    messaged: []
  }
async componentDidMount(){
  // List of messages of everyone I Messaged
  const messaged = await messageService.getMessaged()
  this.setState({messaged})

}
  render() { 
    return (
      <>
      </>
    );
  }
}
 
export default Messaged;