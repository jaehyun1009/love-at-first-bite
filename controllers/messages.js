import { Profile } from '../models/profile.js'
import { Message } from '../models/message.js'

export {
  messaged
}
// Gets the profile then shows the resent message between them
function messaged(req,res){
  Profile.findById(req.user.profile)
  .populate({
    path: "messaged",
    populate: {
      path: 'otherPerson'
    }
  })
  .then(profile=> res.json(profile))
}