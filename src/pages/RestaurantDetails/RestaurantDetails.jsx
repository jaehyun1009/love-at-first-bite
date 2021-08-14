import React, { Component } from 'react';
import * as restaurantAPI from '../../services/restaurantService'

class RestaurantDetails extends Component{
  state = {
    searchResult: {}
  }
  async componentDidMount(){
    const searchResult = await restaurantAPI.searchOne(this.props.match.params.id)
    this.setState({
      searchResult
    })
  }
  render(){
    const {searchResult} = this.state
    return (
      <>
        <h1>{searchResult?.name}</h1>
        <img src={searchResult?.image_url} width='500px' alt='business'/>
        <br />
        <h3><a href={searchResult?.url}>Yelp link to business</a></h3>
        <h3>Phone Number: {searchResult?.display_phone}</h3>
        <h3>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)</h3>
        <h3>Price Rating: {searchResult?.price}</h3>
        <h3>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
        <h3>Address: {searchResult?.location?.display_address?.join(', ')}</h3>
        <h2>More Photos</h2>
        {
          searchResult?.photos?.map((photo, idx) =>
          <img src={photo} height='200px' alt='extra' key={idx}/>)
        }
      </>
    )
  }
}

export default RestaurantDetails