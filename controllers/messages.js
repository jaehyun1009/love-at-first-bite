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
    path: "messaged",
    populate: {
      path: 'otherPerson'
    }
  })
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
  Profile.findById(req.user.profile)
  .then(loggedInProfile => {
    Profile.findById(req.params.id)
    // whos being messaged
    .then(beingMessagedProfile => {
      // have I messaged this person before
      if(loggedInProfile.messaged.some(messagedProfile => {
        return messagedProfile.otherPerson.toString() === beingMessagedProfile._id.toString()})) {
        const messaged = loggedInProfile.messaged.find(messaged => messaged.otherPerson.toString() === beingMessagedProfile._id.toString())
        const idx = loggedInProfile.messaged.findIndex(mesaged => messaged.otherPerson === beingMessagedProfile._id.toString())
        messaged.newestMessage = req.body.content
        loggedInProfile.messaged.splice(idx, 1, messaged)
        loggedInProfile.save()
        .then(loggedInProfile => {
          const messaged = beingMessagedProfile.messaged.find(messaged => messaged.otherPerson.toString() === loggedInProfile._id.toString())
          const idx = beingMessagedProfile.messaged.findIndex(messaged => messaged.otherPerson.toString() === loggedInProfile._id.toString())
          messaged.newestMessage = req.body.content
          beingMessagedProfile.messaged.splice(idx, 1, messaged)
          beingMessagedProfile.save()
          .then(beingMessagedProfile => {
            req.body.from = loggedInProfile._id
            req.body.to = beingMessagedProfile._id
            let message = new Message(req.body)
            message.save()
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
          req.body.otherPerson = loggedInProfile._id
          req.body.newestMesage = req.body.content
          beingMessagedProfile.messaged.push(req.body)
          beingMessagedProfile.save()
          .then(beingMessagedProfile => {
            delete req.body.otherPerson
            delete req.body.newestMessage
            req.body.from = loggedInProfile._id
            req.body.to = beingMessagedProfile._id
            let message = new Message(req.body)
            message.save()
            .then(message => {
              res.json(message)
            })
          })
        })
      }
    })
  })
}
