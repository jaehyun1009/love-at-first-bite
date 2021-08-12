import React, { Component } from 'react';
import * as restaurantAPI from '../../services/restaurantService'

class RestaurantSearch extends Component {
  state = {
    searchResults: []
  }
  async componentDidMount(){
    const {params} = this.props.match
    const searchResults = await (params.category ?
      restaurantAPI.search(params.location, params.category) :
      restaurantAPI.searchWithoutCategory(params.location))
    this.setState({
      searchResults: searchResults.businesses
    })
  }
  async componentDidUpdate(prevProps){
    const {params} = this.props.match
    if (params.location !== prevProps.match.params.location ||
        params.category !== prevProps.match.params.category){
      const searchResults = await (params.category ?
        restaurantAPI.search(params.location, params.category) :
        restaurantAPI.searchWithoutCategory(params.location))
      this.setState({
        searchResults: searchResults.businesses
      })
    }
  }
  render(){
    return (
      <>
        <h1>Restaurant Results</h1>
        <h2>Location: {this.props.match.params.location}</h2>
        {
          this.props.match.params.category &&
          <h2>Category: {this.props.match.params.category}</h2>
        }
      </>
    )
  }
}

export default RestaurantSearch