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
            <h1>{searchResult?.name}</h1>
            <img src={searchResult?.img_url} width='300px' alt='business'/>
            <br />
            <h3><a href={searchResult?.url}>Yelp link to business</a></h3>
            <h3>Phone Number: {searchResult?.phone}</h3>
            <h3>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)</h3>
            <h3>Price Rating: {searchResult?.price}</h3>
            <h3>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            <h3>Address: {searchResult?.address}</h3>
            { !!searchResult?.likedBy?.find(profile => profile._id === this.props.userProfile?._id) && 
              <>
                <h2>Others who liked this restaurant</h2>
                { searchResult?.likedBy?.map(profile => {
                    if (profile._id !== this.props.userProfile?._id)
                      return <ProfileCard key={profile._id} profile={profile} />
                  })
                }
              </>
            }
            <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
            />
          </> : <>
            <h1>{searchResult?.name}</h1>
            <img src={searchResult?.image_url} width='500px' alt='business'/>
            <br />
            <h3><a href={searchResult?.url}>Yelp link to business</a></h3>
            <h3>Phone Number: {searchResult?.display_phone}</h3>
            <h3>Rating: {searchResult?.rating} ({searchResult?.review_count} Reviews)</h3>
            <h3>Price Rating: {searchResult?.price}</h3>
            <h3>Categories: {searchResult?.categories?.map(category => category.title).join(', ')}</h3>
            <h3>Address: {searchResult?.location?.display_address?.join(', ')}</h3>
            <RestaurantForm
              key={searchResult?.id}
              restaurant={searchResult}
              userProfile={this.props.userProfile}
              handleAddRestaurant={this.props.handleAddRestaurant}
              handleRemoveRestaurant={this.props.handleRemoveRestaurant}
            />
          </>
        }
      </div>
    )
  }
}

export default RestaurantDetails