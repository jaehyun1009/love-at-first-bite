import axios from 'axios'
import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  search,
  searchWithoutName,
  searchOne,
  addRestaurant,
  removeRestaurant
}

function search(req, res){
  axios.get(`https://api.yelp.com/v3/businesses/search`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    params: {
      location: req.params.location,
      term: req.params.name
    }
  }).then(response => {
    res.json(response.data)
  }).catch(err => {
    console.log(err)
  })
}

function searchWithoutName(req, res){
  axios.get(`https://api.yelp.com/v3/businesses/search`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    params: {
      location: req.params.location
    }
  }).then(response => {
    res.json(response.data)
  }).catch(err => {
    console.log(err)
  })
}

function searchOne(req, res){
  Restaurant.findOne({id: req.params.id}).populate('likedBy').populate({
    path: 'likedBy', 
    populate: {
      path: 'restaurants',
      populate: 'Restaurant'
    }
  }).then(restaurant => {
    if (restaurant) {
      res.json(restaurant)
    } else {
      axios.get(`https://api.yelp.com/v3/businesses/${req.params.id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
      }).then(response => {
        res.json(response.data)
      }).catch(err => {
        console.log(err)
      })
    }
  })
}

function addRestaurant(req, res){
  req.body.likedBy = req.user.profile
  Profile.findById(req.user.profile).then(profile => {
    Restaurant.findOne({id: req.body.id}).then(restaurant => {
      if (restaurant){
        restaurant.likedBy.push(req.user.profile)
        restaurant.save().then(restaurant => {
          profile.restaurants.push(restaurant._id)
          profile.save()
          profile.populate('restaurants').execPopulate().then(profile => res.json(profile))
        })
      } else {
        Restaurant.create(req.body).then(restaurant => {
          profile.restaurants.push(restaurant._id)
          profile.save()
          profile.populate('restaurants').execPopulate().then(profile => res.json(profile))
        })
      }
    })
  })
}

function removeRestaurant(req, res){
  Restaurant.findOne({id: req.params.id}).then(restaurant => {
    restaurant.likedBy.remove({_id: req.user.profile})
    restaurant.save().then(() => {
      Profile.findById(req.user.profile).populate('restaurants').then(profile => {
        let restaurantIdx = profile.restaurants.findIndex(restaurant => restaurant.id === req.params.id)
        profile.restaurants.splice(restaurantIdx, 1)
        profile.save()
        profile.populate('restaurants').execPopulate().then(() => res.json(profile))
      })
    })
  })
}