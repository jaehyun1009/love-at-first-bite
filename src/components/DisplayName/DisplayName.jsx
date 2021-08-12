import React from 'react';

const DisplayName = ({profile}) => {
  return (
    <>
      {profile?.firstName} {profile?.lastName && profile.lastName[0] + '.'}
    </>
  )
}

export default DisplayName