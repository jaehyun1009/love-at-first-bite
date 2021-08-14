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
  .populate({
    path: 'restaurants',
    populate: {
      path: 'likedBy',
      model: 'Profile'
    }
  }).then(profile => {
    res.json(profile)
  })
}