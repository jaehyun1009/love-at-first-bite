import React, { Component } from 'react';
import styles from './SearchForm.css'




class Search extends Component {

  state = {
    invalidForm: true,
    locData: {
      query: ''
    },
    nameData: {
      query: ''
    }
  }

  formRef = React.createRef()

  handleLocChange = e => {
    const locData = {...this.state.locData, [e.target.name]: e.target.value}
    this.setState({
      locData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleNameChange = e => {
    const nameData = {...this.state.nameData, [e.target.name]: e.target.value}
    this.setState({
      nameData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.locData.query}/${this.state.nameData.query}`)
  }

  render(){
    return (
      <>
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        >
        
        <div>
          <label htmlFor="query">
            Restaurant Name: 
          </label>
          <input
            type="text"
            name="query"
            value={this.state.nameData.query}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="query">
            Location: <span style={{color: 'red'}}>*</span>
          </label>
          <input
            type="text"
            name="query"
            value={this.state.locData.query}
            onChange={this.handleLocChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={this.state.invalidForm}
        >
          Search
        </button>
      </form>
      </>
    )
  }

}

export default Search