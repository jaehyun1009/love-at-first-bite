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
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="firstName" className={styles.label}>
            First Name<span style={{color: 'red'}}>*</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>Email<span style={{color: 'red'}}>*</span></label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>Password<span style={{color: 'red'}}>*</span></label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className={styles.label}>Confirm Password<span style={{color: 'red'}}>*</span></label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthday" className={styles.label}>Birthday<span style={{color: 'red'}}>*</span></label>
          <input
            type="date"
            autoComplete="off"
            id="birthday"
            value={birthday}
            name="birthday"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="gender" className={styles.label}>Gender<span style={{color: 'red'}}>*</span></label>
          <input
            type="radio"
            id="Male"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            id="Female"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            id="Other"
            value={gender}
            name="gender"
            onClick={this.handleClick}
          />
          <label htmlFor="Other">Other</label>
        </div>
        <div className={styles.inputContainer}>
          <p>(<span style={{color: 'red'}}>*</span> = required)</p>
        </div>
        <div className={styles.inputContainer}>
          <button disabled={this.isFormInvalid()} className={styles.button}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default SignupForm