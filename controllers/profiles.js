import { Profile } from '../models/profile.js'

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
    res.json(profile)
  })
}

function updateProfile(req, res){
  Profile.findByIdAndUpdate(req.user.profile, req.body, {new: true})
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