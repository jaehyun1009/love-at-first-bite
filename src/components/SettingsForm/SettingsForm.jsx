import React, { Component } from 'react'
import { DateTime } from 'luxon'

class SettingsForm extends Component{
  state = {

  }
  handleSubmit = async e => {
    e.preventDefault()
    this.props.history.push('/')
  }
  render(){
    return (
      <>
        <form
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <h2>Settings</h2>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}

export default SettingsForm