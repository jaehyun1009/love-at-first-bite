import React from 'react';
import FavoriteRestaurants from '../../components/FavoriteRestaurants/FavoriteRestaurants'
import { Link } from 'react-router-dom'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import OtherUserInfo from '../../components/OtherUserInfo/OtherUserInfo';

const ProfileDetails = ({location, history, userProfile, handleAddRestaurant, handleRemoveRestaurant, handleUpdateProfile}) => {
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
        profile?._id === userProfile?._id ?
        <ProfileInfo 
          profile= {profile}
          history= {history}
          userProfile={userProfile}
          handleUpdateProfile={handleUpdateProfile}
        /> : <Link
          to={{
            pathname: "/messages",
            state: profile 
          }}> Messages
        </Link>
      }

      <OtherUserInfo 
        profile= {profile}
        history= {history}
        userProfile={userProfile}
      />

    </>
  )
}

export default ProfileDetails