import React from 'react';
import DisplayName from '../../components/DisplayName/DisplayName'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'

const ProfileDetails = ({location, userProfile, handleAddRestaurant, handleRemoveRestaurant}) => {
  const {profile} = location.state
  return (
    <>
      <h1><DisplayName profile={profile}/></h1>
      <h2>Favorite Restaurants</h2>
      {
        userProfile && 
        location.state.profile.restaurants.map(restaurant => 
          <div key={restaurant.id}>
            <h5>{restaurant.name}</h5>
            <a href={`/restaurants/${restaurant.id}`}>
              <img src={restaurant.img_url} width='200px' alt="restaurant"/>
            </a>
            {
              (profile._id === userProfile._id) && 
              <RestaurantForm
                restaurant={restaurant}
                userProfile={userProfile}
                handleAddRestaurant={handleAddRestaurant}
                handleRemoveRestaurant={handleRemoveRestaurant}
              />
            }
          </div>
        )
      }
      <h2>Messages</h2>
    </>
  )
}

export default ProfileDetails