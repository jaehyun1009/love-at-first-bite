import React from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import styles from './ProfileDetails.module.css'
import FavoriteRestaurants from '../../components/FavoriteRestaurants/FavoriteRestaurants'


const ProfileDetails = ({location, userProfile, handleAddRestaurant, handleRemoveRestaurant}) => {
  const {profile} = location.state
  return (
    <>
    <FavoriteRestaurants 
      profile= {profile}
      userProfile= {userProfile}
      handleAddRestaurant= {handleAddRestaurant}
      handleRemoveRestaurant= {handleRemoveRestaurant}
    />
    </>
  )
}

export default ProfileDetails