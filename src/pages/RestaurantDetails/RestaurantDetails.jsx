import React, { Component } from 'react';
import * as restaurantAPI from '../../services/restaurantService'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './RestaurantDetails.module.css'

class RestaurantDetails extends Component{
  state = {
    searchResult: {},
  }
  async componentDidMount(){
    const searchResult = await restaurantAPI.searchOne(this.props.match.params.id)
    this.setState({
      searchResult
    })
  }
  render(){
    const {searchResult} = this.state
    return (
      <div className={styles.box} >
        {
          (searchResult._id) ? 
          <>
            <h1 className={styles.header}><a href={searchResult?.url} target="blank"> {searchResult?.name}</a> </h1>
            <img className={styles.picture} src={searchResult?.img_url} width='300px' alt='business' />
            <br />
            <h3 className={styles.info}>Address: {searchResult?.address}</h3>
            <h3 className={styles.info}>Phone Number: {searchResult?.phone}</h3>
            <h3 className={styles.info}>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews) &emsp;&emsp; Price Rating: {searchResult?.price}</h3>
            <h3 className={styles.info}>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            {/* <h3 className={styles.info}><a href={searchResult?.url}>Yelp link to business</a></h3> */}
            { !!searchResult?.likedBy?.find(profile => profile._id === this.props.userProfile?._id) && 
              <>
                <h2 className={styles.otherPeople}>OTHERS WHO LIKE THIS RESTAURANT</h2>
                <div className={styles.peopleList}>
                { searchResult?.likedBy?.map(profile => {
                    if (profile._id !== this.props.userProfile?._id)
                      return <ProfileCard key={profile._id} profile={profile} />
                  })
                }
                </div>
              </>
            }
           <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
              className={styles.restaurantButton}
            /> 
          </> : <>
            <h1 className={styles.header}>{searchResult?.name}</h1>
            <img className={styles.picture}  src={searchResult?.image_url} width='500px' alt='business'/>
            <br />
            <h3 className={styles.info}>Address: {searchResult?.location?.display_address?.join(', ')}</h3>
            <h3 className={styles.info}>Phone Number: {searchResult?.display_phone}</h3>
            <h3 className={styles.info}>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)  &emsp;&emsp; Price Rating: {searchResult?.price} </h3>
            <h3 className={styles.info}>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            <h3 className={styles.info}><a href={searchResult?.url}>Yelp link to business</a></h3>
            <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
              className={styles.restaurantButton}
            />
          </>
        }
      </div>
    )
  }
}

export default RestaurantDetails