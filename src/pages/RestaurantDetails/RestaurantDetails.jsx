import React, { Component } from 'react';
import * as restaurantAPI from '../../services/restaurantService'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'

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
        {
          (searchResult._id) ? 
          <>
            <h1>{searchResult?.name}</h1>
            <img src={searchResult?.img_url} width='500px' alt='business'/>
            <br />
            <h3><a href={searchResult?.url}>Yelp link to business</a></h3>
            <h3>Phone Number: {searchResult?.phone}</h3>
            <h3>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)</h3>
            <h3>Price Rating: {searchResult?.price}</h3>
            <h3>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            <h3>Address: {searchResult?.address}</h3>
            <h2>Others who liked this restaurant_</h2>
            <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
            />
          </> : <>
            <h1>{searchResult?.name}</h1>
            <img src={searchResult?.image_url} width='500px' alt='business'/>
            <br />
            <h3><a href={searchResult?.url}>Yelp link to business</a></h3>
            <h3>Phone Number: {searchResult?.display_phone}</h3>
            <h3>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)</h3>
            <h3>Price Rating: {searchResult?.price}</h3>
            <h3>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            <h3>Address: {searchResult?.location?.display_address?.join(', ')}</h3>
            <h2>Others who liked this restaurant</h2>
            <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
            />
          </>
        }
      </>
    )
  }
}

export default RestaurantDetails