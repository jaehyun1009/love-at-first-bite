import React from 'react';
import DisplayName from '../../components/DisplayName/DisplayName'

const ProfileDetails = ({location, userProfile}) => {
  const {profile} = location.state
  return (
    <>
      <h1><DisplayName profile={profile}/></h1>
      <h2>Favorite Restaurants</h2>
      {
        location.state.profile.restaurants.map((restaurant, idx) => 
          <div key={restaurant.id}>
            <h5>{restaurant.name}</h5>
            <a href={`/restaurants/${restaurant.id}`}>
              <img src={restaurant.img_url} width='200px' alt="restaurant"/>
            </a>
          </div>
        )
      }
      <h2>Messages</h2>
    </>
  )
}

export default ProfileDetails