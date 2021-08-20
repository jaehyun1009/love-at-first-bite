import React from 'react';
import RestaurantForm from '../RestaurantForm/RestaurantForm'
import styles from './FavoriteRestaurants.module.css'

const FavoriteRestaurants = ({profile, userProfile, handleAddRestaurant, handleRemoveRestaurant}) => {
  return (
    <>
      <div className={styles.box}>
      <h3 className={styles.header}>FAVORITE RESTAURANTS</h3>
      <table>
        <tbody>
          <tr>
      {
        userProfile && 
        profile.restaurants.map(restaurant => 
          <div className={styles.eachRow} key={restaurant.id}>
            
            <td class={styles.title}>
            <a href={`/restaurants/${restaurant.id}`}>
              <h3>{restaurant.name}</h3>
            </a>
            </td>
            <td className={styles.removeButton} >
            {
              (profile._id === userProfile._id) && 
              <RestaurantForm
              key={restaurant.id}
              restaurant={restaurant}
              userProfile={userProfile}
              handleAddRestaurant={handleAddRestaurant}
              handleRemoveRestaurant={handleRemoveRestaurant}
              className={styles.removeButton}
              />
            }
            </td>
          </div>
        )
      }
      </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}

export default FavoriteRestaurants