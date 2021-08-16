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
        <p>{this.state.message}</p>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
      </main>
    )
  }
}

export default Signup
