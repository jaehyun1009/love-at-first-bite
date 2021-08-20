import React, { Component } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './Messaged.module.css'

class Messaged extends Component {
  render() { 
    return (
      <>
      <div className={styles.box}>
        <h1 className={styles.header}> Messages</h1>
      {this.props.messaged?.map((messaged, idx) =>
        <>
        <button className={styles.messageBox} onClick={() => this.props.handleMessageShow(messaged.otherPerson)}>
          <div>
            <h1><ProfileCard key={idx} profile={messaged.otherPerson}/> </h1> 
            <h3>{messaged.newestMessage}</h3>
          </div>
        </button>
        </>
      )}
      </div>
      </>
    );
  }
}

export default Messaged;