import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  index,
  userProfile,
}

function index(req, res){
  Profile.find({}).populate('restaurants').then(profiles => {
    res.json(profiles)
  })
}

function userProfile(req, res){
  Profile.findById(req.user.profile)
  .populate('restaurants')
  .then(profile => {
    res.json(profile)
  })
}