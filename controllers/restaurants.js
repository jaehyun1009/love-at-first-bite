import axios from 'axios'
import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  search,
  searchWithoutCategory
}

function search(req, res){
  axios.get(`https://api.yelp.com/v3/businesses/search`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    params: {
      location: req.params.location,
      category: req.params.category
    }
  }).then(res => {
    console.log(res.data.businesses)
  }).catch(err => {
    console.log(err)
  })
}

function searchWithoutCategory(req, res){
  axios.get(`https://api.yelp.com/v3/businesses/search`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    params: {
      location: req.params.location
    }
  }).then(res => {
    console.log(res.data.businesses)
  }).catch(err => {
    console.log(err)
  })
}