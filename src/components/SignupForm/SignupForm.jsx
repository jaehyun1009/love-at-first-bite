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
    const { firstName, email, password, passwordConf, birthday, gender } = this.state
    const age = Math.floor(DateTime.local().diff(DateTime.fromISO(birthday), 'years').years)
    if (isNaN(age) || age < 18 || age > 99)
      return true
    return !(firstName && email && birthday && gender && password && password === passwordConf)
  }

  render() {
    const { firstName, lastName, email, password, passwordConf, birthday, gender } = this.state
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
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[!-~]{8,}$"
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
          <label htmlFor="birthday" className={styles.label}>Birthday</label>
          <br /><br />
          <input
            type="date"
            autoComplete="off"
            id="birthday"
            value={birthday}
            name="birthday"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <p><span style={{color: 'red'}}>**</span> You must be 18 or older to sign up.</p>
        </div>
        <br />
        
        <div >
          <label htmlFor="gender" className={styles.label}>Gender</label>
          <br />
          <br />
          <input
            type="radio"
            id="Male"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Male">Male</label>&nbsp;
          <input
            type="radio"
            id="Female"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Female">Female</label>&nbsp;
          <input
            type="radio"
            id="Other"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Other">Other</label>
        </div>

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