import React from 'react';
import { Link } from 'react-router-dom'

const ProfileCard = ({profile}) => {
  return (
    <>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h4>{profile?.firstName} {profile?.lastName && profile.lastName[0] + '.'}</h4>
      </Link>
    </>
  )
}

export default ProfileCard;