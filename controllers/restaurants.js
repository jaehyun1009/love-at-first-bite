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
      categories: req.params.category
    }
  }).then(response => {
    res.json(response.data)
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
  }).then(response => {
    res.json(response.data)
  }).catch(err => {
    console.log(err)
  })
}