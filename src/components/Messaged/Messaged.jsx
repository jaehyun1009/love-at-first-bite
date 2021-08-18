import React, { Component } from 'react'
import * as messageService from '../../services/message'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './Messaged.module.css'

class Messaged extends Component {
  state = { 
    messaged: []
  }
  async componentDidMount(){
    // List of messages of everyone I Messaged
    const messaged = await messageService.getMessaged()
    this.setState({messaged: messaged})
  }
  render() { 
    return (
      <>
      {this.state.messaged?.map((messaged, idx) =>
        <>
          <h1><ProfileCard key={idx} profile={messaged.otherPerson}/></h1> 
          <h3>{messaged.newestMessage}</h3>
        </>
      )}
      </>
    );
  }
}

export default Messaged;