import React from 'react';

const RestaurantCard = ({restaurant}) => {
  return (
    <>
      <a href={`/restaurants/${restaurant.id}`}><h2>{restaurant.name}</h2></a>
      <img src={restaurant.image_url} width='300px' alt='business'/>
      <h3>Rating: {restaurant.rating}</h3>
      <h3>Price Rating: {restaurant.price}</h3>
      <h3>Categories: {restaurant.categories?.map(category => category.title).join(', ')}</h3>
      <h3>Address: {restaurant.location.display_address?.join(', ')}</h3>
      <h3>Country: {restaurant.location.country}</h3>
    </>
  )
}

export default RestaurantCard