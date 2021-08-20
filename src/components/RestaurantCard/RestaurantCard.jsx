import React from 'react';
import RestaurantForm from '../RestaurantForm/RestaurantForm';
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({restaurant, userProfile, handleAddRestaurant, handleRemoveRestaurant}) => {
  return (
    <>
    <li className={styles.cards_item}>
      <div className={styles.card}>
        {/* <div className={styles.card_image}><img src={restaurant.image_url} width='300px' alt='business'/></div> */}
        <div className={styles.card_content}>
          <a href={`/restaurants/${restaurant.id}`}><h2 className={styles.card_title}>{restaurant.name}</h2></a>
          <p className={styles.card_text}>{restaurant.location.display_address?.join(', ')}</p>
          <p className={styles.card_text}>{restaurant.categories?.map(category => category.title).join(', ')}</p>
          <p className={styles.card_text}>Rating: {restaurant.rating}</p>
          <p className={styles.card_text}>Price: {restaurant.price}</p>
          
          <div className={styles.restaurantForm}>
          <RestaurantForm
            restaurant={restaurant}
            userProfile={userProfile}
            handleAddRestaurant={handleAddRestaurant}
            handleRemoveRestaurant={handleRemoveRestaurant}
          />
          </div>

        </div>
      </div>
    </li>
    </>
  )
}

export default RestaurantCard