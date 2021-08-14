import React, { Component } from 'react';

class RestaurantForm extends Component{
  state = {
    formData: {
      id: this.props.restaurant.id,
      name: this.props.restaurant.name,
      url: this.props.restaurant.url,
      img_url: this.props.restaurant.image_url,
      rating: this.props.restaurant.rating,
      review_count: this.props.restaurant.review_count,
      categories: this.props.restaurant.categories,
      price: this.props.restaurant.price,
      phone: this.props.restaurant.display_phone,
      address: this.props.restaurant.location?.display_address.join(', '),
      city: this.props.restaurant.location?.city,
      zip_code: this.props.restaurant.location?.zip_code,
      state: this.props.restaurant.location?.state,
      country: this.props.restaurant.location?.country
    }
  }
  handleAddRestaurant = e => {
    e.preventDefault()
    this.props.handleAddRestaurant(this.state.formData)
  }
  handleRemoveRestaurant = e => {
    e.preventDefault()
    this.props.handleRemoveRestaurant(this.state.formData.id)
  }
  render(){
    return (
      <>
        {
          this.props.userProfile?.restaurants?.some(restaurant => restaurant.id === this.state.formData.id) ?
          <button onClick={this.handleRemoveRestaurant}>REMOVE</button> :
          <button onClick={this.handleAddRestaurant}>ADD</button>
        }
      </>
    )
  }
}

export default RestaurantForm