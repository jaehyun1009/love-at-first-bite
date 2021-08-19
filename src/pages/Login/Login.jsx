import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render() {
    return (
      <main className={styles.container}>
        <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin}/>

      </main>
    )
  }
}

export default LoginPage
