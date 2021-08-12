import React from 'react';
import { Link } from 'react-router-dom'
import DisplayName from '../DisplayName/DisplayName'

const ProfileCard = ({profile}) => {
  return (
    <>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h4><DisplayName profile={profile}/></h4>
      </Link>
    </>
  )
}

export default ProfileCard