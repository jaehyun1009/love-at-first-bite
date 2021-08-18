import { Profile } from '../models/profile.js'
import { Message } from '../models/message.js'

export {
  messaged,
  messages,
  create
}
// Gets the profile then shows the resent message between them
function messaged(req,res){
  Profile.findById(req.user.profile)
  .populate({
    path: 'messaged',
    populate: {
      path: 'otherPerson',
      populate: {
        path: 'restaurants',
        model: 'Restaurant'
      }
    }
  })
  //.sort({messaged: {updatedAt: -1}})
  .then(profile=> res.json(profile.messaged))
}

function messages(req,res){
  // find all messages between two users
  Message.find({$or: [
  {$and: [{to: req.user.profile}, {from: req.params.id}]},
  {$and: [{to: req.params.id}, {from: req.user.profile}]}
]})
.populate('to')
.populate('from')
.then(messages => {
res.json(messages)
}) 
}

function create (req, res) {
  // find whos logged in
  Profile.findById(req.user.profile)
  .then(loggedInProfile => {
    Profile.findById(req.params.id)
    // whos being messaged
    .then(beingMessagedProfile => {
      // have I messaged this person before return truth or false
      if(loggedInProfile.messaged.some(messagedProfile => {
        return messagedProfile.otherPerson.toString() === beingMessagedProfile._id.toString()})) {
        // extracting message
        const messaged = loggedInProfile.messaged.find(messaged => messaged.otherPerson.toString() === beingMessagedProfile._id.toString())
        // find index of the message
        // who sent the latest message. removing the old message that was displayed and showing the new one
        const idx = loggedInProfile.messaged.indexOf(messaged)
        messaged.newestMessage = req.body.content
        loggedInProfile.messaged.splice(idx, 1, messaged)
        loggedInProfile.save()
        // Same as above but for the other user. Matching the newest messages
        .then(loggedInProfile => {
          const messaged = beingMessagedProfile.messaged.find(messaged => messaged?.otherPerson?.toString() === loggedInProfile._id.toString())
          const idx = beingMessagedProfile.messaged.indexOf(messaged)
          beingMessagedProfile.messaged.splice(idx, 1, messaged)
          beingMessagedProfile.save()
          .then(beingMessagedProfile => {
            req.body.from = loggedInProfile._id
            req.body.to = beingMessagedProfile._id
            let message = new Message(req.body)
            message.save()
            // return messages as json 
            .then(message => {
              res.json(message)
            })
          })
        })
      } else {
        req.body.otherPerson = beingMessagedProfile._id
        req.body.newestMessage = req.body.content
        loggedInProfile.messaged.push(req.body)
        loggedInProfile.save()
        .then(loggedInProfile => {
          // otherPersom turns into loggedInProfile
          req.body.otherPerson = loggedInProfile._id
          // push newest message and other person
          beingMessagedProfile.messaged.push(req.body)
          beingMessagedProfile.save()
          .then(beingMessagedProfile => {
            // delete key value pairs
            delete req.body.otherPerson
            delete req.body.newestMessage
            // sets up refrences in dataBase
            req.body.from = loggedInProfile._id
            req.body.to = beingMessagedProfile._id
            let message = new Message(req.body)
            message.save()
            .then(message => {
              // send new message back 
              res.json(message)
            })
          })
        })
      }
    })
  })
}
