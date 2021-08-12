import React, { Component } from 'react';

class Search extends Component {

  state = {
    invalidForm: true,
    locData: {
      query: ''
    },
    catData: {
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

  handleCatChange = e => {
    const catData = {...this.state.catData, [e.target.name]: e.target.value}
    this.setState({
      catData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.locData.query}/${this.state.catData.query}`)
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
            Location<span style={{color: 'red'}}>*</span>
          </label>
          <input
            type="text"
            name="query"
            value={this.state.locData.query}
            onChange={this.handleLocChange}
            required
          />
        </div>
        <div>
          <label htmlFor="query">
            Category
          </label>
          <input
            type="text"
            name="query"
            value={this.state.catData.query}
            onChange={this.handleCatChange}
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