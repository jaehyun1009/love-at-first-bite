import React, { Component } from 'react'
import * as messageService from '../../services/message'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './Messaged.module.css'

class Messaged extends Component {
  render() { 
    return (
      <>
      {this.props.messaged?.map((messaged, idx) =>
        <>
        <button onClick={() => this.props.handleMessageShow(messaged.otherPerson)}>
          <div>
            <h1><ProfileCard key={idx} profile={messaged.otherPerson}/></h1> 
            <h3>{messaged.newestMessage}</h3>
          </div>
        </button>
        </>
      )}
      </>
    );
  }
}

export default Messaged;