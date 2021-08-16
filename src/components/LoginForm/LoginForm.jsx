import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

class LoginForm extends Component {
  state = {
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.login(this.state);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
        alert('Invalid Credentials')
    }
  }

  render() {
    const { email, pw } = this.state
    return (
      <>
      <div className={styles.box}>
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <h2>LOGIN</h2>
        <div className={styles.inputBox}>
          <label htmlFor="email"></label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            placeholder='Email'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password"></label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            placeholder='Password'
          />
        </div>
        <div>
          <button className={styles.searchButton}>Log In</button>
        </div>
      </form>

      <br />
      <Link to="/signup"> Not a member? Sign up here. </Link>

    </div>
    </>
    )
  }
}

export default LoginForm
