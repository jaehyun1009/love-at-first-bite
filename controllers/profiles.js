import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  index,
  userProfile,
  updateProfile
}

function index(req, res){
  Profile.find({}).populate('restaurants').then(profiles => {
    res.json(profiles)
  })
}

function userProfile(req, res){
  Profile.findById(req.user.profile)
  .populate('restaurants')
  .populate({
    path: 'restaurants',
    populate: {
      path: 'likedBy',
      model: 'Profile'
    }
  }).then(profile => {
    console.log(profile)
    res.json(profile)
  })
}

function updateProfile(req, res){
  Profile.findById(req.user.profile)
  .populate('profile')

  .then(profile => {
    console.log(profile)
    res.json(profile)
  })
}