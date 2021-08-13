import axios from 'axios'
import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  search,
  searchWithoutName,
  searchOne
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