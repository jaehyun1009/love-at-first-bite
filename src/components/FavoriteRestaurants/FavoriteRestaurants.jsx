import React from 'react';
import RestaurantForm from '../RestaurantForm/RestaurantForm'
import styles from './FavoriteRestaurants.module.css'


const FavoriteRestaurants = ({profile, userProfile, handleAddRestaurant, handleRemoveRestaurant}) => {
  return (
    <>
      <h1>{profile.firstName} {profile.lastName && profile.lastName + '.'}</h1>
      <table>
        <thead>
          <h3>FAVORITE RESTAURANTS</h3>
        </thead>
        <tbody>
          <tr>
      {
        userProfile && 
        profile.restaurants.map(restaurant => 
          <div key={restaurant.id}>
            
            <td>
            <a href={`/restaurants/${restaurant.id}`}>
              <h5>{restaurant.name}</h5>
            </a>
            </td>
            <td>
            {
              (profile._id === userProfile._id) && 
              <RestaurantForm
              key={restaurant.id}
              restaurant={restaurant}
              userProfile={userProfile}
              handleAddRestaurant={handleAddRestaurant}
              handleRemoveRestaurant={handleRemoveRestaurant}
              />
            }
            </td>
          </div>
        )
      }
      </tr>
        </tbody>
      </table>
    </>
  )
}

export default FavoriteRestaurants