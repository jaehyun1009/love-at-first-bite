import React from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import SettingsForm from '../../components/SettingsForm/SettingsForm'
import styles from './ProfileDetails.module.css'
import FavoriteRestaurants from '../../components/FavoriteRestaurants/FavoriteRestaurants'
import { Link } from 'react-router-dom'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const ProfileDetails = ({location, userProfile, handleAddRestaurant, handleRemoveRestaurant, handleUpdateProfile}) => {
  const {profile} = location.state
  return (
    <>
    <FavoriteRestaurants 
      profile= {profile}
      userProfile= {userProfile}
      handleAddRestaurant= {handleAddRestaurant}
      handleRemoveRestaurant= {handleRemoveRestaurant}
    />
        
    {
      profile?._id !== userProfile?._id && 
      <Link
        to={{
          pathname: "/messages",
          state: profile 
        }}> Messages
      </Link>
    }

    <br />
    <br />
    <ProfileInfo 
      profile= {profile}
      userProfile={userProfile}
      handleUpdateProfile={handleUpdateProfile}
      />

    </>
  )
}

export default ProfileDetails