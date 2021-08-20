import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import { DateTime } from 'luxon'

class SignupForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConf: '',
    birthday: '',
    gender: ''
  }

  handleChange = e => {
    this.props.updateMessage('')
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = e => {
    this.setState({
      [e.target.name]: e.target.id
    })
  }

  handleSubmit = async e => {
    const { history, updateMessage, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.signup(this.state)
      handleSignupOrLogin()
      history.push('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  isFormInvalid() {
    const { firstName, email, password, passwordConf, birthday, gender} = this.state
    const age = Math.floor(DateTime.local().diff(DateTime.fromISO(birthday), 'years').years)
    if (isNaN(age) || age < 18 || age > 99)
      return true
    return !(firstName && email && birthday && gender && password && password === passwordConf)
  }

  render() {
    const { firstName, lastName, email, password, passwordConf, birthday, gender, location, sexualOrientation } = this.state
    return (
      <>
      <div className={styles.box}>
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <h2>SIGN UP</h2>

        <div className={styles.inputBox}>
          <label htmlFor="firstName" className={styles.label}>
          </label>
          <input
            type="text"
            autoComplete="off"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={this.handleChange}
            placeholder='First Name'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="lastName" className={styles.label}>
          </label>
          <input
            type="text"
            autoComplete="off"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={this.handleChange}
            placeholder='Last Name'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email" className={styles.label}></label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            placeholder='Email'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password" className={styles.label}></label>
          <input
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[!-~]{8,}$"
            title="Password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number"
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            placeholder='Password'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="confirm" className={styles.label}></label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
            placeholder='Confirm Password'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="birthday" className={styles.label} >Birthday</label>
          <br /><br />
          <input
            type="date"
            autoComplete="off"
            id="birthday"
            value={birthday}
            name="birthday"
            onChange={this.handleChange}
            className={styles.birthdayForm}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="gender" className={styles.label}>Gender</label>
          <br />
          <br />
          <select name="gender" id="gender" value={gender} onChange={this.handleChange}>
            <option value="" selected disabled hidden></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />
        <div className={styles.inputBox}>
          <label htmlFor="sexualOrientation" className={styles.label}>
          </label>
          <input
            type="text"
            autoComplete="off"
            id="sexualOrientation"
            value={sexualOrientation}
            name="sexualOrientation"
            onChange={this.handleChange}
            placeholder='Sexual Orientation'
          />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="searchingFor" className={styles.label}>Looking For:</label>
          <br />
          <br />
          <select name="gender" id="gender" value={gender} onChange={this.handleChange}>
            <option value="" selected disabled hidden></option>
            <option value="Love">Love</option>
            <option value="Friendship">Friendship</option>
            <option value="Both">Both</option>
          </select>
        </div>
<br />
        <div className={styles.inputBox}>
          <label htmlFor="location" className={styles.label}>
          </label>
          <input
            type="text"
            autoComplete="off"
            id="location"
            value={location}
            name="location"
            onChange={this.handleChange}
            placeholder='Location'
          />
        </div>
        <br />
        <div className={styles.inputBox}>
          <p><span style={{color: 'orange'}}>You must be 18 or older to sign up.</span></p>
        </div>
        <br />
        <button disabled={this.isFormInvalid()} className={styles.searchButton}>Sign Up</button>
      </form>
      <br />
      <Link to='/login'> Already a member? Login here. </Link>
      </div>
      </>
    )
  }
}

export default SignupForm