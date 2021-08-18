import React, { Component } from 'react'
import styles from './ProfileInfo.module.css'


class ProfileInfo extends Component {
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

formRef = React.createRef();

handleSubmit = e => {
  e.preventDefault();
  this.props.handleUpdateProfile(this.state);
  this.props.history.push('/')
};

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  render() {
    return (
      <>
      <div className={styles.box}>
        <h3 className={styles.header}>PROFILE DETAILS</h3>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="firstName" className={styles.label}>First Name:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            id="firstName"
            name="firstName"
            value= {this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="lastName" className={styles.label}>Last Name:
          </label>
          <br />
          <input
            type="text"
            autoComplete="off"
            id="lastName"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <br />
          <input
            type="email"
            autoComplete="off"
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="profilePic" className={styles.label}>Profile Pic URL:</label>
          <br />
          <input
            type="profilePic"
            autoComplete="off"
            id="profilePic"
            defaultValue={this.state.profilePic}
            name="profilePic"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="location" className={styles.label}>Location:</label>
          <br />
          <input
            type="location"
            autoComplete="off"
            id="location"
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="gender" className={styles.label}>Gender:</label>
          <br />
          <input
            type="gender"
            autoComplete="off"
            id="gender"
            value={this.state.gender}
            name="gender"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="sexualOrientation" className={styles.label}>Sexual Orientation:</label>
          <br />
          <input
            type="sexualOrientation"
            autoComplete="off"
            id="sexualOrientation"
            value={this.state.sexualOrientation}
            name="sexualOrientation"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="searchingFor" className={styles.label}>Searching For</label>
          <br className={styles.lineBreak} />
          <select 
            name="searchingFor" 
            type="searchingFor"
            id="searchingFor"
            value={this.state.searchingFor}
            onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Love">Love</option>
              <option value="Friendship">Friendship</option>
              <option value="Both">Both</option>
          </select>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="aboutMe" className={styles.label}>About Me</label>
          <br className={styles.lineBreak} />
          <textarea
            type="aboutMe"
            autoComplete="off"
            id="aboutMe"
            value={this.state.aboutMe}
            name="aboutMe"
            onChange={this.handleChange}
            className={styles.submissionField}
          />
        </div>
        <button className={styles.searchButton} type="submit">UPDATE</button>

      </form>
      </div>
      </>
    );
  }
}

export default ProfileInfo;