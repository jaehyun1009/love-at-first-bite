import React, { Component } from 'react';
import styles from './SearchForm.module.css'

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
      <div className={styles.box}>
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        >
        <h2>SEARCH RESTAURANT</h2>
        <div className={styles.inputBox}>
          <label htmlFor="query">
            {/* Restaurant Name:  */}
          </label>
          <input
            type="text"
            name="query"
            value={this.state.nameData.query}
            onChange={this.handleNameChange}
            placeholder='Restaurant Name'
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="query"></label>
          <input
            type="text"
            name="query"
            value={this.state.locData.query}
            onChange={this.handleLocChange}
            required
            placeholder='City,State or Zip Code'
          />
        </div>
        <button
          type="submit"
          disabled={this.state.invalidForm}
          class={styles.searchButton}
        >
          Search
        </button>
      </form>
      </div>
      </>
    )
  }

}

export default Search