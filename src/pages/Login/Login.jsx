import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import Header from '../../components/Header/Header'


class LoginPage extends Component {
  render() {
    return (
      <>
      <Header />
      <main className={styles.container}>
        <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin}/>
      </main>
      </>
    )
  }
}

export default LoginPage
