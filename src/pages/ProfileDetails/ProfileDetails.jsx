import React from 'react';
import DisplayName from '../../components/DisplayName/DisplayName'

const ProfileDetails = ({location, userProfile}) => {
  const {profile} = location.state
  return (
    <>
      <h1><DisplayName profile={profile}/></h1>

      <h2>Favorite Restaurants</h2>

      <h2>Messages</h2>
    </>
  )
}

export default ProfileDetails