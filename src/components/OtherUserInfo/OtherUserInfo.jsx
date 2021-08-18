import React, { Component } from 'react'
import styles from './OtherUserInfo.module.css'


import { Link } from 'react-router-dom'
import * as authService from '../../services/authService'


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
        <br />
        <h3>About {this.state.firstName}</h3>
          {
            !this.state.profilePic ?
            <img src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' alt=''/> :
            <img onError={this.defaultImage} src={this.state.profilePic} alt="" />
          }
          <p>Gender: {this.state.gender}</p>
          <p>Sexual Orientation: {this.state.sexualOrientation}</p>
          <p>Searching For: {this.state.searchingFor}</p>
          <p>Location: {this.state.location} </p>
          <p>More Info: {this.state.aboutMe}</p>
          <br />
          <br />
      </>
    );
  }
}

export default OtherUserInfo;