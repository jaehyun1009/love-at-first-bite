import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  userProfile
}

function userProfile(req, res){
  Profile.findById(req.user.profile)
  .populate('restaurants')
  .then(profile => {
    res.json(profile)
  })
}