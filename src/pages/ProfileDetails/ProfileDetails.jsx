import React from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import styles from './ProfileDetails.module.css'
import FavoriteRestaurants from '../../components/FavoriteRestaurants/FavoriteRestaurants'
import { Link } from 'react-router-dom'

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
   

<Link
  to={{
    pathname: "/messages",
    state: profile 
  }}> Message </Link>

    </>
  )
}

export default ProfileDetails