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
    userGender: this.props?.profile?.userGender,
    sexualOrientation: this.props?.profile?.sexualOrientation,
    searchingFor: this.props?.profile?.searchingFor,
}

  render() {
    return (
      <>
        <br />
        <h3>About {this.state.firstName}</h3>
          <p><img src="{this.state.profilePic}" alt="" /></p>
          <p>Gender: {this.state.userGender}</p>
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