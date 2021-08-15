import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render() {
    return (
      <main className={styles.container}>
        <h1>Log In</h1>
        <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin}/>
        <Link to="/signup"> Not a member, sign up here. </Link>
      </main>
    )
  }
}

export default LoginPage
