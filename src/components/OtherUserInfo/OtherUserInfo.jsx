import React, { Component } from 'react'
import styles from './OtherUserInfo.module.css'
import MessageLink from '../MessageLink/MessageLink'

class OtherUserInfo extends Component {
  state = {
    firstName: this.props?.profile?.firstName,
    lastName: this.props?.profile?.lastName,
    email: this.props?.profile?.email,
    profilePic: this.props?.profile?.profilePic,
    location: this.props?.profile?.location,
    aboutMe: this.props?.profile?.aboutMe,
    gender: this.props?.profile?.gender,
    sexualOrientation: this.props?.profile?.sexualOrientation,
    searchingFor: this.props?.profile?.searchingFor,
  }

  defaultImage = e => {
    console.log('default image')
    e.target.src = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
  }
  render() {
    return (
      <>
      <div className={styles.box}>
        <h3 className={styles.header}>About {this.state.firstName}</h3>
          {
            !this.state.profilePic ?
            <img className={styles.profilePic} src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' alt=''/> :
            <img onError={this.defaultImage} src={this.state.profilePic} alt="" />
          }
          <p className={styles.paragraph} >GENDER: <br /> {this.state.gender}</p>
          <p className={styles.paragraph} >SEXUAL ORIENTATION: <br /> {this.state.sexualOrientation}</p>
          <p className={styles.paragraph} >SEARCHING FOR: <br /> {this.state.searchingFor}</p>
          <p className={styles.paragraph} >LOCATION: <br /> {this.state.location} </p>
          <p className={styles.paragraph} >ABOUT THEM: <br /> {this.state.aboutMe}</p>
          <br />
          {this.props.profile?._id !== this.props.userProfile?._id &&
            <p className={styles.messageLink}> <MessageLink profile={this.props.profile} /></p>
          }
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default OtherUserInfo;