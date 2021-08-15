import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'


class Signup extends Component {
  state = {
    message: '',
  }

  updateMessage = msg => {
    this.setState({ message: msg })
  }

  render() {
    return (
      <main className={styles.container}>
        <h1>Sign Up</h1>
        <p>{this.state.message}</p>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <Link to='/login'> Already a member, login here. </Link>
      </main>
    )
  }
}

export default Signup
